import React from "react";
import styles from "./template.module.css";
const Template = () => {
  return (
    <div className={styles["outer-container"]}>
      <div className={styles["outer-template"]}>
        <div className={styles.templates}>
          <div className={styles.bar}>
            <div>button1</div>
            <div>button2</div>
            <div>button3</div>
          </div>
          <div className={styles["sub-container"]}>
            <div className={styles["to-text"]}>
              <span>
                <b>To: </b>
                <span className={styles.to}>Your Recipient</span>
              </span>
              <span>
                <b>Subject: </b>
                <strong
                  style={{ fontFamily: "Lexcend Deca", fontSize: "14px" }}
                >
                  Check Out The new Signature
                </strong>
              </span>
            </div>
          </div>
          <div className={styles["outer-div"]}>
            <div className={styles["middle-div"]}>
              <div className={styles["inner-div"]}>
                <table cellSpacing={0} cellPadding={0} border={0}>
                  <tbody>
                    <tr style={{ textAlign: "center" }}>
                      <td>
                        <h2
                          style={{
                            margin: "0px",
                            fontSize: "20px",
                            fontFamily: "sans-serif",
                            color: "black",
                            fontWeight: "600",
                          }}
                        >
                          <span>name</span>
                          <span>linespacing</span>
                          <span>lastname</span>
                        </h2>
                        <p
                          style={{
                            margin: "0px",
                            color: "black",
                            fontSize: "16px",
                            lineHeight: "24px",
                          }}
                        >
                          <span>jjj</span>
                        </p>
                        <div
                          style={{
                            margin: "0px",
                            color: "black",
                            fontSize: "16px",
                            lineHeight: "24px",
                            fontWeight: "500",
                            paddingBottom: "30px",
                          }}
                        >
                          <span>kkk</span>
                          <span> | </span>
                          <span>kkk</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <table>
                          <tbody>
                            <tr>
                              <td></td>
                            </tr>
                            <tr>
                              <td className={styles.horizontalline}></td>
                            </tr>
                            <tr>
                              <td>1</td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template;
