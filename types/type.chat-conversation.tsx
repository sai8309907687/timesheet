import { useState, useEffect, useRef } from 'react';
import { SelectedProfile } from '@/modules/profile/common/service';
import { addUserReply } from '@/modules/questions/common/service';
import { Chat } from '@/modules/questions/common/types';
import getRazorpayService from '@/modules/razorpay/common/service';
import { ProgressBar, ShowLoader, ShowToast } from '@/utils/app.event';
import AppStorage, { SESSION_INFO } from '@/utils/app.storage';

interface ChatConversationProps {
  chat: Chat;
  onChatUpdated: (updatedChat: Chat) => void;
}

export const ChatConversation: React.FC<ChatConversationProps> = ({ chat, onChatUpdated }) => {
  const [reply, setReply] = useState('');
  const chatContainerRef = useRef<HTMLDivElement | null>(null);

  // Scroll to the bottom whenever the conversation changes
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chat.conversation]);

  const handleSendReply = async () => {
    ShowLoader(true);
    ProgressBar.value = true;

    try {
      const sessionInfo = AppStorage.getData(SESSION_INFO, true);
      const razorpayService = getRazorpayService();
      const res = await razorpayService.initiatePayment(
        {
          amount: 50,
          currency: 'INR',
          createdBy: sessionInfo.id || '',
          createdKey: 'END_USER',
          serviceId: SelectedProfile.value?.id,
          type: 'conversation',
        },
        {
          name: 'Antweb',
          description: `Initiator for Conversation to Astrologer`,
        }
      );

      if (res.status == 'success') {
        const updatedChat = await addUserReply(chat._id, reply);
        setReply('');
        onChatUpdated(updatedChat);
        return res;
      } else {
        ShowToast('payment failed', 'warning');
      }
    } finally {
      ShowLoader(false);
      ProgressBar.value = false;
    }
  };

  return (
    <div className='flex flex-col h-full pb-16'>
      {/* Scrollable message list */}
      <div className='flex-1 bg-white py-4 rounded-lg mb-4 overflow-hidden'>
        <div
          className='h-[calc(100vh-200px)] chat-height overflow-y-auto space-y-4 border p-2 rounded-lg'
          ref={chatContainerRef} // Attach the ref here
        >
          {chat.conversation.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.fromAstrologer ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`inline-block astrologer-width p-3 rounded-lg shadow-md ${msg.fromAstrologer
                  ? 'bg-gray-100 text-black lg:text-2xl'
                  : 'bg-blue-600 text-white lg:text-2xl'
                  }`}
              >
                <h1 className='font-medium md:text-base'>{msg.text}</h1>
                <div className='mt-1 flex items-center justify-end text-xs text-gray-100'>
                  <span>{new Date(msg.timestamp).toLocaleTimeString()}</span>
                  <span
                    className={`ml-2 ${msg.fromAstrologer ? (msg.isReadByUser ? 'text-blue-900' : 'text-blue-900') : msg.isReadByAstrologer ? 'text-blue-900' : 'text-blue-900'}`}
                  >
                    {msg.fromAstrologer ? msg.isReadByUser : msg.isReadByAstrologer ? '✓✓' : '✓'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Input area */}
      <div className='fixed bottom-0 left-0 right-0 bg-white p-4 border-t border-gray-200 shadow-lg sm:static sm:border-t-0 sm:shadow-none'>
        <div className='flex items-center gap-2 max-w-4xl mx-auto'>
          <input
            type='text'
            className='flex-1 p-2 sm:p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-300 text-sm sm:text-base'
            placeholder='Type a message...'
            value={reply}
            onChange={(e) => setReply(e.target.value)}
          />
          <button
            className='bg-blue-600 text-white px-4 py-2 sm:px-6 sm:py-2 rounded-lg disabled:opacity-50 hover:bg-blue-700 transition-colors text-sm sm:text-base'
            onClick={handleSendReply}
            disabled={!reply.trim()}
          >
            Pay ₹50 to Submit
          </button>
        </div>
      </div>
    </div>
  );
};
