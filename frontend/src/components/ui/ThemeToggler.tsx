import { useTheme } from "@/hooks/useTheme";
import styled from "styled-components";

const ThemeToggler = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <StyledWrapper>
      <label className="switch">
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={toggleTheme}
        />
        <span className="slider" />
      </label>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .switch {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 22px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    inset: 0;
    background: #fff;
    transition: 0.4s;
    border-radius: 20px;
    border: 1px solid #ccc;
  }

  .slider:before {
    content: "";
    position: absolute;
    height: 16px;
    width: 16px;
    left: 2px;
    top: 50%;
    transform: translateY(-50%);
    background-color: white;
    border-radius: 50%;
    box-shadow: 0 2px 5px #999999;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: #5fdd54;
    border: 1px solid transparent;
  }

  input:checked + .slider:before {
    transform: translate(18px, -50%);
  }
`;

export default ThemeToggler;
