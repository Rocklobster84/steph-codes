import React from 'react'

import { FormCardProps } from "@/types"
import { SubmitButton } from './SubmitButton'

export const FormCard: React.FC<FormCardProps> = ({
  title,
  description,
  submitting = false,
  submitLabel = "Send",
  className = "",
  children,
  ...rest
}) => {
  return (
    <form
      {...rest}
      className={`w-full max-w-xl rounded-xl border border-gray-500 bg-neutral-900 p-6 shadow-lg justify-center ${className}`}
    >
      {title && <h2 className="text-xl font-semibold text-white-800">{title}</h2>}
      {description && <p className="mt-1 text-sm text-white-500">{description}</p>}

      {/* Form fields */}
      <div className="mt-4 flex flex-col gap-4">{children}</div>

      {/* Action */}
      <div className="mt-6 flex justify-end">
        <SubmitButton loading={submitting}>{submitLabel}</SubmitButton>
      </div>
    </form>
  )
}

export default FormCard