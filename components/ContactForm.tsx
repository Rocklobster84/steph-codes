"use client";

const ContactForm = () => {

  return (
    <>
      <div className="flex justify-center mt-10">

        <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" className="w-full max-w-xl rounded-xl border border-gray-500 bg-neutral-900 p-6 shadow-lg justify-center">

          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden">
            <label>
              Don’t fill this out if you're human: <input name="bot-field" />
            </label>
          </p>

          <h2 className="text-xl font-semibold text-white-800">Contact Me</h2>
          <p className="mt-1 text-sm text-white-500">I usually reply within 24 hours.</p>

            <div className="mt-4 flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row gap-4">

                <div className="flex-1 flex flex-col"> 
                  <div className="flex flex-col w-full">

                    <label for="first name" className="mb-1 flex items-center gap-1 cursor-pointer text-white-700 transition-colors duration-200 focus-visible:bg-accent peer-focus:bg-accent-hover">
                      <span>First Name</span>
                    </label>

                    <div className="flex flex-col gap-1">
                      <input type="text" id="first" name="first" className="peer w-full rounded-md border px-3 py-2 shadow-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 disabled:opacity-50 border-gray-300 focus-visible:ring-blue-600"/>
                    </div>

                  </div>
                </div>
        
                <div className="flex-1 flex flex-col"> 
                  <div className="flex flex-col w-full">

                    <label for="last name" className="mb-1 flex items-center gap-1 cursor-pointer text-white-700 transition-colors duration-200 focus-visible:bg-accent peer-focus:bg-accent-hover">
                      <span>Last Name</span>
                    </label>

                    <div className="flex flex-col gap-1">
                      <input type="text" id="last" name="last" className="peer w-full rounded-md border px-3 py-2 shadow-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 disabled:opacity-50 border-gray-300 focus-visible:ring-blue-600"/>
                    </div>

                  </div>
                </div>

              </div>
      
              <label for="email" className="mb-1 flex items-center gap-1 cursor-pointer text-white-700 transition-colors duration-200 focus-visible:bg-accent peer-focus:bg-accent-hover">
                <span>Email</span>
              </label>
              <div className="flex flex-col gap-1">
                <input type="text" id="email" name="email" className="peer w-full rounded-md border px-3 py-2 shadow-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 disabled:opacity-50 border-gray-300 focus-visible:ring-blue-600"/>
              </div>
      
              <label for="message" className="mb-1 flex items-center gap-1 cursor-pointer text-white-700 transition-colors duration-200 focus-visible:bg-accent peer-focus:bg-accent-hover">
                <span>Message</span>
              </label>
              <div className="flex flex-col gap-1">
                <textarea id="message" name="message" className="peer w-full rounded-md border px-3 py-2 shadow-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 disabled:opacity-50 border-gray-300 focus-visible:ring-blue-600"></textarea>
              </div>
      
            </div>

            <div className="mt-6 flex justify-end">
      
              <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-4 py-2 font-medium text-white shadow-sm transition-colors duration-200 hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:bg-accent disabled:cursor-not-allowed disabled:bg-gray-400">
                <span>Send</span>
              </button>
      
            </div>
    
        </form>
      </div>
    </>
  )
}

export default ContactForm