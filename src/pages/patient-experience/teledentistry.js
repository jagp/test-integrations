import React from "react"
import { graphql } from "gatsby"

import PxExperienceTemplate from "../../templates/patient-experience-inner"

const Teledentistry = data => {
  const images = data.data

  return (
    <PxExperienceTemplate
      page="teledentistry" /* this should be dynamic from the page props */
      pageTitle="Teledentistry"
      pageSubtitle="Patient First Technology"
      pageIntro="Stay ahead of the curve by introducing innovative patient first technology that positions your dental practice as a safe and convenient solution for providing quality care."
      metaTitle="Teledentistry | Healthcare Marketing Agency"
      metaDescription="Stay ahead of the curve by introducing innovative patient first technology that positions your dental practice as a safe and convenient solution for providing quality care."
      backgroundImage={images.backgroundImage.childImageSharp.fluid}
      subfooterBgImage={images.subfooterBgImage.childImageSharp.fluid}
      contentRows={[
        {
          content: {
            rowType: 'odd-row',
            title: "Teledentistry",
            innerTitle: "The ability to do Dentistry remotely",
            paragraph:
              "Our teledentistry solution is a new, paperless and contactless check in experience for your team and patients safety. This solution allows you to pre screen patients with the help of our technology in order to triage more effectively",
            listTitle: "Contact-less Forms",
            listItems: [
              'Cosmetic Questionnaire',
              "Dental Emergency",
              "Dental Implants",
              "TMD",
              "Virtual Consultation",
              "COVID-19 Screening"
            ],
          },
          image: {
            url: images.image_one.childImageSharp.fluid.src,
            alt: "Teledentistry",
          },
        },
        {
          content: {
            rowType: 'icon-row',
            title: "Features & Benefits",
            innerTitle: "How teledentistry benefits your patient's needs",
            panels: [
              {
                icon: images.icon_one.childImageSharp.fluid.src,
                alt: "Teledentistry Messaging",
                caption: "Send secure messages that meet HIPAA guidelines to ensure patients privacy and confidentiality."
              },
              {
                icon: images.icon_two.childImageSharp.fluid.src,
                alt: "Teledentistry Treatment Plans",
                caption: "Patients can send and receive vital information to you that quickly allows you to create a treatment plan."
              },
              {
                icon: images.icon_three.childImageSharp.fluid.src,
                alt: "Teledentistry Coronavirus",
                caption: "Determine if a patient or someone in their home has been diagnosed with the novel coronavirus."
              },
              {
                icon: images.icon_four.childImageSharp.fluid.src,
                alt: "Teledentistry Patient Care",
                caption: "Save your patients and team time by making critical decisions regarding at risk patients before they arrive at your office."
              },
            ],
          }
        },
        {
          content: {
            rowType: 'even-row',
            title: "Patient-First Experience",
            innerTitle: "Pre-Screening and Evaluations",
            paragraph:
              "Manage your important documents securely and only a click away with our Doctor Genius PX, Patient Experience software package. The result is enhanced with operational efficiency, increased case acceptance, improved patient experience, and a consistant standard of care",
          },
          image: {
            url: images.image_two.childImageSharp.fluid.src,
            alt: "Teledentistry",
          },
        },
        {
          content: {
            rowType: 'odd-row',
            title: "Remotely",
            innerTitle: "We're here to support you, anytime or any place",
            paragraph:
              "Doctor Genius community has all the up to date necessary resources for your team to be successful and profitable. Make things simpler for your patients and team in order to provide quality care for your local community. We are here to help you make a 5 star experience with each and every patients.",
          },
          image: {
            url: images.image_three.childImageSharp.fluid.src,
            alt: "Teledentistry",
          },
        },
      ]}
    />
  )
}

export default Teledentistry

export const ImageQuery = graphql`
  query TeledentistryImages {
    backgroundImage: file(relativePath: { eq: "teledentistry-head.jpg" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    subfooterBgImage: file(relativePath: { eq: "px-subfooter-bg.jpg" }) {
      childImageSharp {
        fluid(quality: 70) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image_one: file(relativePath: { eq: "teledentistry-remote.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image_two: file(relativePath: { eq: "teledentistry-patients.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image_three: file(relativePath: { eq: "teledentistry-support.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    icon_one: file(relativePath: { eq: "tele_secure.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    icon_two: file(relativePath: { eq: "tele_treatment_plan.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    icon_three: file(relativePath: { eq: "tele_patient_care.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    icon_four: file(relativePath: { eq: "tele_clock.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
