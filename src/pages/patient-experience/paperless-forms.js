import React from "react"
import { graphql } from "gatsby"

import PxExperienceTemplate from "../../templates/patient-experience-inner"

const PaperlessForms = data => {
  const images = data.data

  return (
    <PxExperienceTemplate
      page="paperless-forms" /* this should be dynamic from the page props */
      pageTitle="Paperless Forms"
      pageSubtitle="Drive staff and patient adoption with technology that is easy to use."
      pageIntro="Revolutionize your patient intake process with a full library of paperless forms that can be easily customized to your practice."
      metaTitle="Paperless Forms | Healthcare Marketing Agency"
      metaDescription="Stay ahead of the curve by introducing innovative patient first technology that positions your dental practice as a safe and convenient solution for providing quality care."
      backgroundImage={images.backgroundImage.childImageSharp.fluid}
      subfooterBgImage={images.subfooterBgImage.childImageSharp.fluid}
      contentRows={[
        {
          content: {
            rowType: 'odd-row',
            title: "Digital Forms",
            innerTitle: "Streamline Check-in with Paperless Forms",
            paragraph:
              "Paperless Forms exceed patient expectations by allowing you to send forms before a visit, collect consent digitally, and greatly reduce the burden of paper from your office."
          },
          image: {
            url: images.image_one.childImageSharp.fluid.src,
            alt: "Teledentistry",
          },
        },
        {
          content: {
            rowType: 'icon-row',
            title: "Introducing Paperless Forms",
            innerTitle: "Offer Endless Opportunities for Dental Practices",
            panels: [
              {
                icon: images.icon_one.childImageSharp.fluid.src,
                title: "Security",
                caption: "Protect your patients privacy with multi layer security."
              },
              {
                icon: images.icon_two.childImageSharp.fluid.src,
                title: "Efficiency",
                caption: "Save time and money. Improve patient communication so your office can get more done."
              },
              {
                icon: images.icon_three.childImageSharp.fluid.src,
                title: "Customization",
                caption: "You have full control over your forms where you can easily edit, update, and customize new forms."
              },
              {
                icon: images.icon_four.childImageSharp.fluid.src,
                title: "Personalization",
                caption: "Let your patients see your brand in order to establish and enhance the overall patient experience."
              },
            ],
          }
        },
        {
          content: {
            rowType: 'even-row',
            title: "Contactless Forms",
            innerTitle: "Take Patient Photos with One Tap",
            paragraph:
              "Communicate with your patients more proactively. Reduce unnecessary emergency appointments and exposure by using a Teledentistry Emergency Triage Form. This form can be easily texted or emailed and allows patients to securely send photos and videos of their issue. The doctor can review the information and make an educated decision on whether the case warrants an emergency appointment.",
          },
          image: {
            url: images.image_two.childImageSharp.fluid.src,
            alt: "Teledentistry",
          },
        },
        {
          content: {
            rowType: 'odd-row',
            title: "Treatment Forms",
            innerTitle: "Sign Digital Consent Forms & Treatments Plans",
            paragraph:
              "We are living in a new world where touching a pen or clipboard at the front desk could easily transmit a virus. With new guidance on practice setting requirements, this software is necessary for patient safety and practice growth.",
          },
          image: {
            url: images.image_three.childImageSharp.fluid.src,
            alt: "Teledentistry",
          },
        },
        {
          content: {
            rowType: 'even-row',
            title: "Compatibility",
            innerTitle: "Forms Compatible With Your PMS",
            paragraph:
              "The Doctor Genius Px, Patient Experience Package integrates seamlessly with these four practice management software systems. Additionally, our patient experience program will work alongside your digital marketing campaigns which leverage content, our mobile-first web design, SEO, online directories, and social media to drive new patients to your practice. Learn more about how our patient first technology can help grow your online presence!",
          },
          image: {
            url: images.image_four.childImageSharp.fluid.src,
            alt: "Teledentistry",
          },
        },
      ]}
    />
  )
}

export default PaperlessForms

export const ImageQuery = graphql`
  query PaperlessFormsImages {
    backgroundImage: file(relativePath: { eq: "paperless-forms-head.jpg" }) {
      childImageSharp {
        fluid(quality: 70) {
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
    image_one: file(relativePath: { eq: "digital-forms.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image_two: file(relativePath: { eq: "contactless-forms.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image_three: file(relativePath: { eq: "treatment-forms.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image_four: file(relativePath: { eq: "compatibility.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    icon_one: file(relativePath: { eq: "security.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    icon_two: file(relativePath: { eq: "efficiency.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    icon_three: file(relativePath: { eq: "customization.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    icon_four: file(relativePath: { eq: "personalization.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
