import React from "react";
import Page from "./Page";
import { Container } from "reactstrap";

const AccessibilityStatementPage = props => {
  return (
    <Page title="AccessibilityStatement"  {...props}>
      <div className="navbar-margin">
      <Container>
        <div className="pt-10">
          <h3 className="mb-4 direction-rtl d-flex">{"הצהרת נגישות"}</h3>
          <p className="direction-rtl text-right">
            {`מארגני הכנס עושים מאמצים רבים על מנת שכלל פעילות הכנס תהיה נגישה לאנשים עם מוגבלויות, בהתאם לתקנות שוויון הזדמנויות לאנשים עם מוגבלויות (התאמות נגישות לשירות), תשע“ג-2013.
השנה ההרצאות באולם 10a, יונגשו באמצעות מערכת תמלול ומערכת עזר שמיעה בשיתוף עם עמותת ״בקול״ והתשלום בגין השירות ישמש לתרומות.

כמו כן, ביתן 10 באקספו תל אביב מאפשר נגישות מלאה לבאי הכנס. ניתן לעיין בהצהרת הנגישות המעודכנת `}
            <a href="https://expotelaviv.co.il/wp-content/uploads/2019/03/%D7%94%D7%A6%D7%94%D7%A8%D7%AA-%D7%A0%D7%92%D7%99%D7%A9%D7%95%D7%AA.pdf">במסמך הזה</a>
          </p>
        </div>
      </Container>
      </div>
    </Page>
  );
};

export default AccessibilityStatementPage;
