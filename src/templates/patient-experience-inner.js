import React from "react"
import { Helmet } from "react-helmet"
import BackgroundImage from "gatsby-background-image"

import DefaultPageLayout from "../components/DefaultPageLayout"
import Main from "../components/main-content"
import Container from "../components/Container"
import MobileSecondaryNav from "../components/MobileSecondaryNav"
import SecondaryNavigation from "../components/SecondaryNavigation"
import HeroPx from "../components/HeroPx"

import "../styles/marketing-solutions-inner.scss"
import PageStyles from "./patient-experience-inner.module.scss"
import RowStyles from "../components/Row.module.scss"
import PxSubFooter from '../components/pxSubfooter'

import checkmarkSmall from '../img/icon/checkmark-sm.svg'

export default props => {
  /* These will likely need to be dynamic props */
  const pageTitle = props.pageTitle
  const pageSubtitle = props.pageSubtitle
  const pageIntro = props.pageIntro
  const metaTitle = props.metaTitle
  const metaDescription = props.metaDescription
  const contentRows = props.contentRows
  const heroBackgroundImage = props.backgroundImage
  const subfooterBgImage = props.subfooterBgImage

  const heroConfig = {
    pageType: "patientExperienceInner",
    title: pageTitle,
    subtitle: pageSubtitle,
    content: pageIntro,
  }

  return (
    <div
      className={
        PageStyles.patientExperiencePage + " " + RowStyles.rowStyling
      }
    >
      <DefaultPageLayout>
        <Helmet>
          <title>{metaTitle}</title>
          <meta name="description" content={metaDescription} />
        </Helmet>
        <div className={props.page + " patient-experience-inner"}>
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
                    pageTitle={props.pageTitle}
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

              {/* Begin Split Row of content and image */}
              {contentRows.map((row) => (

                row.content.rowType !== "icon-row" ?
                  <div
                    className={
                      row.content.rowType + " " +
                      RowStyles.row +
                      " " +
                      RowStyles.padded +
                      " " +
                      RowStyles.tallTop +
                      " " +
                      RowStyles.tallBottom
                    }
                  >
                    <div
                      className={
                        (row.content.rowType === 'odd-row'
                          ? "order-sm-2 order-md-3 " + PageStyles.oddRow
                          : "order-sm-2 order-md-2 " + PageStyles.evenRow) +
                        " col-sm-11 col-md-6"}
                    >
                      <div className="content-block">
                        <div
                          className={PageStyles.contentTitle}
                        >
                          <h3>{row.content.title}</h3>
                          <h2>{row.content.innerTitle}</h2>
                        </div>
                        <div
                          className={PageStyles.contentParagraph}
                        >
                          <p>{row.content.paragraph}</p>
                        </div>
                        {row.content.listTitle && (
                          <div className={PageStyles.contentList}>
                            <p>{row.content.listTitle}</p>
                            <ul>
                              {row.content.listItems.map((listItem) => (
                                <li><img src={checkmarkSmall} alt="checkmark" /> {listItem}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                    <div
                      className={
                        (row.content.rowType === 'odd-row'
                          ? "order-sm-1 order-md-2" + PageStyles.oddRow
                          : "order-sm-1 order-md-3 " + PageStyles.evenRow) +
                        " col-sm-12 col-md-6"}
                    >
                      <img
                        className={PageStyles.imgResponsive}
                        src={row.image.url}
                        alt={row.image.alt}
                      />
                    </div>
                  </div>
                  /* End Split Row of content and image */
                  :
                  // Start Large Icon Row
                  <div className={PageStyles.iconContentRow}>
                    <div
                      className={
                        RowStyles.row +
                        " " +
                        RowStyles.padded +
                        " " +
                        RowStyles.tallTop
                      }
                    >
                      <div className={PageStyles.iconContentTitles + " col-sm-10 col-md-10 col-lg-8"}>
                        <h3>{row.content.title}</h3>
                        <h2>{row.content.innerTitle}</h2>
                      </div>
                    </div>
                    <div
                      className={
                        RowStyles.row +
                        " " +
                        RowStyles.tallBottom
                      }
                    >
                      {row.content.panels.map((panel) => (
                        <div className="col-sm-6 col-md-3">
                          <div className={PageStyles.panel}>
                            <div className={PageStyles.iconWrapper}>
                              <img
                                className={PageStyles.imgResponsive}
                                src={panel.icon}
                                alt={panel.alt}
                              />
                            </div>
                            <p className={PageStyles.panelTitle}>
                              {panel.title}
                            </p>
                            <p className={PageStyles.panelCaption}>
                              {panel.caption}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>


              ))}
              {/* // End Large Icon Row */}
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
    </div >
  )
}
