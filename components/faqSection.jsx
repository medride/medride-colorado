import FaqQuestionBox from './faqQuestionBox'

export default function FaqSection() {
  return (
    <section className="h-3/4 bg-[url('/img/background-decorator.jpg')] pb-20">
      <h2 className="px-4 pt-20 pb-10 text-center text-3xl lg:px-0">
        Frequently Asked Questions
      </h2>
      <FaqQuestionBox
        question="What are the hours of operation?"
        answer="Our office and scheduling hours are Monday – Friday 6:00am –
              7:00pm. Transportation hours are 24/7"
      />
      <FaqQuestionBox
        question="Is there a limit on NEMT?"
        answer="There is no limit to the number of daily trips an eligible member
            can receive from MedRide."
      />
      <FaqQuestionBox
        question="Where can a member be transported using NEMT?"
        answer="NEMT can only be provided to services covered by Health First
            Colorado. NEMT is not available for picking up prescriptions,
            picking up medical equipment, completing interviews or paperwork."
      />
    </section>
  )
}
