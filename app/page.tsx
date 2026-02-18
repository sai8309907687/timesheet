import { LucideClock, LucidePlus } from "lucide-react";

export default function Home() {
    return (
        <div className="min-h-screen bg-base-200 p-8">
            <div className="max-w-4xl mx-auto space-y-8">
                <header className="flex justify-between items-center">
                    <div>
                        <h1 className="text-4xl font-bold text-primary flex items-center gap-2">
                            <LucideClock size={32} />
                            Timesheet
                        </h1>
                        <p className="text-base-content/60">Manage your work hours efficiently</p>
                    </div>
                    <button className="btn btn-primary">
                        <LucidePlus size={20} />
                        Add Entry
                    </button>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title text-success">Total Hours</h2>
                            <p className="text-3xl font-mono">40:00</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">This Week</div>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title text-info">Projects</h2>
                            <p className="text-3xl font-mono">5 Active</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">In Progress</div>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title text-warning">Pending Approval</h2>
                            <p className="text-3xl font-mono">2 Entries</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Action Required</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="overflow-x-auto bg-base-100 rounded-box shadow-xl p-4">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Project</th>
                                <th>Task</th>
                                <th>Duration</th>
                                <th>Status</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>2024-05-20</td>
                                <td>
                                    <div className="font-bold">Project Alpha</div>
                                </td>
                                <td>Frontend Development</td>
                                <td>8h</td>
                                <td>
                                    <span className="badge badge-success badge-sm">Approved</span>
                                </td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">details</button>
                                </th>
                            </tr>
                            <tr>
                                <td>2024-05-21</td>
                                <td>
                                    <div className="font-bold">Project Beta</div>
                                </td>
                                <td>Backend Integration</td>
                                <td>6h</td>
                                <td>
                                    <span className="badge badge-warning badge-sm">Pending</span>
                                </td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">details</button>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
