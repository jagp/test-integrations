import React from "react"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import DefaultPageLayout from "../../components/DefaultPageLayout"
import Main from "../../components/main-content"
import Container from "../../components/Container"
import { Helmet } from "react-helmet"
import MobileSecondaryNav from "../../components/MobileSecondaryNav"
import SecondaryNavigation from "../../components/SecondaryNavigation"
import HeroPx from "../../components/HeroPx"
import PxSubFooter from '../../components/pxSubfooter'

import checkmark from "../../img/checked.svg"

import PageStyles from "./plans.module.scss"
import RowStyles from "../../components/Row.module.scss"

const Plans = data => {
  const images = data.data
  const heroBackgroundImage = images.heroBg.childImageSharp.fluid
  const subfooterBgImage = images.subfooterBgImage.childImageSharp.fluid
  const pageTitle = "PX Plans"
  const heroConfig = {
    pageType: "pxPlansPage",
    title: "Doctor Genius PX Plans",
    subtitle: "Affordable Application For Your Practice",
    content: "Be the leader in your local community by providing the best quality of care to your patients. Enhance your patient experience with our various plans that are meant to be easy, convenient and, of course, done from their phone.",
  }

  return (
    <div className={PageStyles.pxPlansPage + " " + RowStyles.rowStyling}>
      <DefaultPageLayout location="plans">
        <Helmet>
          <title>
            Healthcare Marketing Plans | New Patient Acquisition Strategy
          </title>
          <meta
            name="description"
            content="Is your current website and marketing underperforming? Curious about a strong performance driven marketing platform? Review our extensive lineup of plans for your practice."
          />
        </Helmet>
        <div className="px-plans">
          <BackgroundImage fluid={heroBackgroundImage}>
            <HeroPx
              pageType={heroConfig.pageType}
              subtitle={heroConfig.subtitle}
              title={heroConfig.title}
              content={heroConfig.content}
            />
          </BackgroundImage>
          <Main>
            <Container>
              {/* Begin secondary nav Component: */}
              <div className={RowStyles.row}>
                <div className="col-sm-12 panel-row">
                  <SecondaryNavigation
                    pageType="patientExperience"
                    pageTitle={pageTitle}
                  />
                </div>
              </div>
              {/* End secondary nav Component */}

              {/* Begin mobile secondary navigation component */}
              <MobileSecondaryNav
                parentPage="patientExperience"
                titleItem={pageTitle}
              />
              {/* End mobile secondary navigation component */}

              <div className={RowStyles.row + " " + PageStyles.pxLogo}>
                <div className="col-sm-12 col-md-7">
                  <img src={images.pxLogo.childImageSharp.fluid.src} alt="Doctor Genius PX" />
                </div>
              </div>

              <div
                className={
                  RowStyles.row + " " + RowStyles.padded
                }
              >
                <div className="col-sm-12">
                  <div className={PageStyles.plansTable}>
                    {/* <!-- image-row --> */}
                    <div
                      className={
                        PageStyles.imageRow +
                        " " +
                        PageStyles.gridItem
                      }
                    >
                      <div
                        className={
                          PageStyles.backgroundHolder + " background-holder"
                        }
                      />
                    </div>
                    <div
                      className={
                        PageStyles.gridItem +
                        " " +
                        PageStyles.columnSignup
                      }
                    >
                      <h2>Level 1</h2>
                      <p className="column-signup-body">
                        Paperless Form
                      </p>

                    </div>
                    <div
                      className={
                        PageStyles.gridItem +
                        " " +
                        PageStyles.columnSignup +
                        " grid-item column-signup"
                      }
                    >
                      <span className={PageStyles.recommended}>
                        Recommended
                      </span>
                      <h2>Level 2</h2>
                      <p>
                        Paperless Forms & Reminders
                      </p>

                    </div>

                    {/* <!-- /header-row --> */}

                    {/* <!-- details section 1: --> */}
                    <dt
                      className={
                        PageStyles.spacerRow + " justify-content-start"
                      }
                    >
                      <div className={PageStyles.plansRowTitle}>
                        Doctor Genius PX Includes:
                      </div>
                    </dt>
                    {/* <!-- details section 1 row 1: --> */}
                    <div
                      className={
                        PageStyles.gridItem +
                        " " +
                        PageStyles.plansRowTitle
                      }
                    >
                      COVID-19 Screening Form
                    </div>
                    <div className={PageStyles.gridItem}>
                      <img src={checkmark} alt="checkmark" />
                    </div>
                    <div className={PageStyles.gridItem}>
                      <img src={checkmark} alt="checkmark" />
                    </div>

                    {/* <!-- details section 1 row 2: --> */}
                    <div
                      className={
                        PageStyles.gridItem +
                        " " +
                        PageStyles.plansRowTitle
                      }
                    >
                      Paperless Forms
                    </div>
                    <div className={PageStyles.gridItem}>
                      <img src={checkmark} alt="checkmark" />
                    </div>
                    <div className={PageStyles.gridItem}>
                      <img src={checkmark} alt="checkmark" />
                    </div>

                    {/* <!-- details section 1 row 3: --> */}
                    <div
                      className={
                        PageStyles.gridItem +
                        " " +
                        PageStyles.plansRowTitle
                      }
                    >
                      Curbside Check In
                    </div>
                    <div className={PageStyles.gridItem}>
                      <img src={checkmark} alt="checkmark" />
                    </div>
                    <div className={PageStyles.gridItem}>
                      <img src={checkmark} alt="checkmark" />
                    </div>

                    {/* <!-- details section 1 row 4: --> */}
                    <div
                      className={
                        PageStyles.gridItem +
                        " " +
                        PageStyles.plansRowTitle
                      }
                    >
                      Easy Forms Builder
                    </div>
                    <div className={PageStyles.gridItem}>
                      <img src={checkmark} alt="checkmark" />
                    </div>
                    <div className={PageStyles.gridItem}>
                      <img src={checkmark} alt="checkmark" />
                    </div>

                    {/* <!-- details section 1 row 5: --> */}
                    <div
                      className={
                        PageStyles.gridItem +
                        " " +
                        PageStyles.plansRowTitle
                      }
                    >
                      PMS Write Back
                    </div>
                    <div className={PageStyles.gridItem}>
                      <img src={checkmark} alt="checkmark" />
                    </div>
                    <div className={PageStyles.gridItem}>
                      <img src={checkmark} alt="checkmark" />
                    </div>

                    <div
                      className={
                        PageStyles.gridItem +
                        " " +
                        PageStyles.plansRowTitle
                      }
                    >
                      Teledentistry Triage
                    </div>
                    <div className={PageStyles.gridItem}>
                      <img src={checkmark} alt="checkmark" />
                    </div>
                    <div className={PageStyles.gridItem}>
                      <img src={checkmark} alt="checkmark" />
                    </div>

                    {/* <!-- details section 2 row 2: --> */}
                    <div
                      className={
                        PageStyles.gridItem +
                        " " +
                        PageStyles.plansRowTitle
                      }
                    >
                      Recall (Patient Reminders)
                    </div>
                    <div className={PageStyles.gridItem}>

                    </div>
                    <div className={PageStyles.gridItem}>
                      <img src={checkmark} alt="checkmark" />
                    </div>

                    {/* <!-- details section 2 row 3: --> */}
                    <div
                      className={
                        PageStyles.gridItem +
                        " " +
                        PageStyles.plansRowTitle
                      }
                    >
                      2 Way Texting
                    </div>
                    <div className={PageStyles.gridItem}>

                    </div>
                    <div className={PageStyles.gridItem}>
                      <img src={checkmark} alt="checkmark" />
                    </div>

                    {/* <!-- details section 2 row 4: --> */}
                    <div
                      className={
                        PageStyles.gridItem +
                        " " +
                        PageStyles.plansRowTitle
                      }
                    >
                      Mass Texting/Emails
                    </div>
                    <div className={PageStyles.gridItem}>

                    </div>
                    <div className={PageStyles.gridItem}>
                      <img src={checkmark} alt="checkmark" />
                    </div>

                    <div
                      className={
                        PageStyles.gridItem +
                        " " +
                        PageStyles.plansRowTitle
                      }
                    >
                      Postcard Reminders
                    </div>
                    <div className={PageStyles.gridItem}>

                    </div>
                    <div className={PageStyles.gridItem}>
                      <img src={checkmark} alt="checkmark" />
                    </div>

                    {/* <!-- details section 3 row 2: --> */}
                    <div
                      className={
                        PageStyles.gridItem +
                        " " +
                        PageStyles.plansRowTitle
                      }
                    >
                      Voice Reminders
                    </div>
                    <div className={PageStyles.gridItem}>

                    </div>
                    <div className={PageStyles.gridItem}>
                      <img src={checkmark} alt="checkmark" />
                    </div>
                  </div>
                  <div
                    className={
                      PageStyles.plansTable +
                      " " +
                      PageStyles.noBg +
                      " plans-table no-bg"
                    }
                  >
                    {/* <!-- cta section: --> */}
                    <div className={PageStyles.gridItem} />
                    <div
                      className={
                        PageStyles.gridItem +
                        " " +
                        PageStyles.columnSignup +
                        " grid-item column-signup"
                      }
                    >
                      <a
                        href="/demo"
                        className={PageStyles.button + " " + PageStyles.rounder}
                      >
                        Sign Up
                      </a>
                    </div>
                    <div
                      className={
                        PageStyles.gridItem +
                        " " +
                        PageStyles.columnSignup +
                        " grid-item column-signup"
                      }
                    >
                      <a
                        href="/demo"
                        className={PageStyles.button + " " + PageStyles.rounder}
                      >
                        Sign Up
                      </a>
                    </div>

                  </div>
                </div>
              </div>

              <div className="full-bleed-wrapper">
                <div className="full-bleed">
                  <BackgroundImage fluid={subfooterBgImage}>
                    <div className={RowStyles.Row}>
                      <PxSubFooter />
                    </div>
                  </BackgroundImage>
                </div>
              </div>
            </Container>
          </Main>
        </div>
      </DefaultPageLayout>
    </div>
  )
}

export default Plans

export const ImageQuery = graphql`
  query PxPlansImages {
    heroBg: file(relativePath: { eq: "px-plans-head.jpg" }) {
      childImageSharp {
        fluid(quality: 70) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    pxLogo: file(relativePath: { eq: "px-dg-logo.png" }) {
      childImageSharp {
        fluid {
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
  }
`
