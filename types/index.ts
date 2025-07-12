import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
    textStyles?: string;
    isDisabled?: boolean;
}

export interface ExperienceProps {
    heading: string;
    subHeading: string;
    dates: string;
    description: string;
    direction: string;
}

export interface PhotoGalleryProps {
    src: string;
    alt: string;
}

export interface FormLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  htmlFor: string;
  required?: boolean;
  tooltip?: string;
  children: React.ReactNode;
  className?: string;
}

export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string;
  rows?: number;
}

export interface SubmitButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

export interface FormCardProps extends React.FormHTMLAttributes<HTMLFormElement> {
  title?: string;
  description?: string;
  submitting?: boolean;
  submitLabel?: string;
  className?: string;
}