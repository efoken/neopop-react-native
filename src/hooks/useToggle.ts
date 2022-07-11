import * as React from 'react';

interface UseToggleOptions {
    isChecked?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const useToggle = ({ isChecked, onChange }: UseToggleOptions) => {
    const [isToggleChecked, setIsToggleChecked] = React.useState(isChecked ?? false);

    React.useEffect(() => {
        if (typeof isChecked === 'boolean') {
            setIsToggleChecked(isChecked);
        }
    }, [isChecked]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange instanceof Function) {
            onChange(event);
        } else {
            setIsToggleChecked(event.target.checked);
        }
    };

    return { isChecked: isToggleChecked, handleChange };
};

export default useToggle;
