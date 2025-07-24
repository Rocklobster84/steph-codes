import React from 'react'

import { FormCardProps } from "@/types"
import { SubmitButton } from './SubmitButton'

export const FormCard: React.FC<FormCardProps> = ({
  children,
}) => {
  return (
    <form className="w-full max-w-xl rounded-xl border border-gray-500 bg-neutral-900 p-6 shadow-lg justify-center" data-netlify="true" name="Contact">
      <h2 className="text-xl font-semibold text-white-800">Contact Me</h2>
      <p className="mt-1 text-sm text-white-500">I usually reply within 24 hours.</p>

      {/* Form fields */}
      <div className="mt-4 flex flex-col gap-4">{children}</div>

      {/* Action */}
      <div className="mt-6 flex justify-end">
        <SubmitButton></SubmitButton>
      </div>
    </form>
  )
}

export default FormCard