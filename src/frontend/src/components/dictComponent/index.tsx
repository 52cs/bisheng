import { useEffect, useRef } from "react";
import { DictComponentType } from "../../types/components";

import DictAreaModal from "../../modals/dictAreaModal";
import { classNames } from "../../util/utils";
import { Input } from "../ui/input";

export default function DictComponent({
    value,
    onChange,
    disabled,
    editNode = false,
}: DictComponentType): JSX.Element {
    useEffect(() => {
        if (disabled) {
            onChange({});
        }
    }, [disabled]);

    useEffect(() => {
        if (value) onChange(value);
    }, [value]);

    const ref = useRef(value);
    return (
        <div
            className={classNames(
                value.length > 1 && editNode ? "my-1" : "",
                "flex flex-col gap-3"
            )}
        >
            {
                <div className="flex w-full gap-3">
                    <DictAreaModal
                        value={ref.current}
                        onChange={(obj) => {
                            onChange(obj);
                        }}
                    >
                        <Input
                            type="text"
                            className={
                                editNode
                                    ? "input-edit-node input-disable pointer-events-none cursor-pointer"
                                    : "input-disable pointer-events-none cursor-pointer"
                            }
                            placeholder="Click to edit your dictionary..."
                        />
                    </DictAreaModal>
                </div>
            }
        </div>
    );
}
