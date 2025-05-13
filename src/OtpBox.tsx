import React, { useRef } from "react";

interface OtpBoxProps {
  length?: number;
  onChange?: (otp: string) => void;
  style?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
}

const OtpBox: React.FC<OtpBoxProps> = ({
  length = 6,
  onChange,
  style,
  inputStyle,
}) => {
  const [otp, setOtp] = React.useState<string[]>(Array(length).fill(""));
  const inputsRef = useRef<HTMLInputElement[]>([]);

  const handleChange = (value: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);
    onChange?.(newOtp.join(""));

    if (value && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  return (
    <div style={{ display: "flex", gap: "8px", ...style }}>
      {Array.from({ length }).map((_, i) => (
        <input
          key={i}
          ref={(el) => {
            inputsRef.current[i] = el!;
          }}
          value={otp[i]}
          onChange={(e) => handleChange(e.target.value, i)}
          onKeyDown={(e) => handleKeyDown(e, i)}
          maxLength={1}
          style={{
            width: "40px",
            height: "40px",
            textAlign: "center",
            fontSize: "18px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            ...inputStyle,
          }}
        />
      ))}
    </div>
  );
};

export default OtpBox;
