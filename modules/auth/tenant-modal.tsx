'use client';

import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import Modal from '@/components/modal';
import TypeButton from '@/types/type.button';
import { TypeInput } from '@/types/type.input';
import { ShowToast } from '@/utils/app.event';
import AppStorage, { TENANT_ID } from '@/utils/app.storage';

interface TenantModalProps {
  show: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

export function TenantModal({ show, onClose, onSuccess }: TenantModalProps) {
  const { t } = useTranslation();
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      tenant: '',
    },
  });

  const onTenantSubmit = async (data: Record<string, string>) => {
    if (data.tenant && data.tenant.trim()) {
      if (typeof window !== 'undefined') {
        AppStorage.setData(TENANT_ID, data.tenant.trim(), true);
      }
      reset();
      ShowToast(t('tenantSaved'), 'success');
      onSuccess?.();
      onClose();
    }
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  return (
    <Modal show={show} onClose={handleClose} title={t('tenant')} showModalBackdrop={false}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(onTenantSubmit)();
        }}
      >
        <div className='flex flex-col gap-4'>
          <TypeInput
            control={control}
            error={errors.tenant}
            label={t('enterTenant')}
            name='tenant'
            rules={{ required: t('tenantRequired') }}
            type='text'
            className='w-full'
          />

          <div className='modal-action'>
            <TypeButton action='secondary' label={t('okay')} variant='solid' className='px-10 btn-pink rounded-lg' htmlType='submit' />
          </div>
        </div>
      </form>
    </Modal>
  );
}
