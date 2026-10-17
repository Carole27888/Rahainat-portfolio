import ContactMeLeft from './ContactMeLeft'
import ContactMeRight from './ContactMeRight'

const ContactMeMain = () => {
  return (
    <section id="contact" className="max-w-[1200px] mx-auto items-center justify-center mt-24 px-4 sm:px-6 md:px-8">
      <h2 className="text-4xl sm:text-5xl text-slate-800 mb-8 text-center font-special">Let's Work Together</h2>
      <div className="flex flex-col lg:flex-row justify-between gap-12 sm:gap-16 bg-white p-6 sm:p-8 rounded-3xl border border-emerald-100 shadow-sm">
        <ContactMeLeft />
        <ContactMeRight />
      </div>
    </section>
  )
}

export default ContactMeMain
