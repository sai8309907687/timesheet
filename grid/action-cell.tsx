import { ICellRendererParams } from "ag-grid-community";
import React from "react";
import { ScreenAccess } from "@/utils/app.event";
import TypeSwitch from "@/types/type.switch";
import TypeIcon from "@/types/type.icon";

interface ActionCellRendererProps extends ICellRendererParams {
  onAction: (data: Record<string, unknown>, action: "edit" | "status") => void;
}

const ActionCellRenderer: React.FC<ActionCellRendererProps> = ({
  data,
  onAction,
}) => {
  const handleEdit = () => {
    if (data) {
      onAction(data, "edit");
    }
  };

  const handleToggleActive = (checked: boolean) => {
    if (!data) return;

    const confirmStatus = confirm("Are you sure you want to change the status of this item?");
    if (confirmStatus) {
      onAction(
        { ...data, isActive: checked, active: checked } as Record<string, unknown>,
        "status"
      );
    }
  };

  return (
    data && (
      <div className="flex flex-row items-center gap-2 p-2">
        {/* Edit */}
        <div className="w-8 h-8 flex items-center justify-center">
          <TypeIcon
            name="SquarePen"
            className="cursor-pointer text-secondary"
            size={24}
            onClick={handleEdit}
          />
        </div>

        {/* DaisyUI TypeSwitch */}
        <TypeSwitch
          checked={!!(data?.active || data?.isActive)}
          disabled={!ScreenAccess.value.delete}
          size="sm"
          onChange={handleToggleActive}
          toggleClassName="toggle-secondary"
        />
      </div>
    )
  );
};

export default ActionCellRenderer;
