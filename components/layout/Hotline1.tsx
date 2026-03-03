import { ContactProps, SocialMediaProps } from "@assets/props";
import { LocalFindById } from "@components/Items/Handle";
import Image from "next/image";
import React from "react";

const Hotline1 = ({ Config }: { Config: Array<any> }) => {
  const Contact: ContactProps = LocalFindById(Config, "contact");
  const SocialMedia: SocialMediaProps = LocalFindById(Config, "SocialMedia");
  return (
    <div>
      <div id="button-contact-vr" className="">
        <div id="gom-all-in-one">
          <div id="zalo-vr" className="button-contact">
            <div className="phone-vr">
              <div className="phone-vr-circle-fill"></div>
              <div className="phone-vr-img-circle">
                <a target="_blank" href={SocialMedia?.zalo}>
                  <Image
                    width={50}
                    height={50}
                    alt="Zalo"
                    src="https://firebasestorage.googleapis.com/v0/b/cokhiphuongtung-960eb.appspot.com/o/zalo.png?alt=media&token=4c9738d5-22fc-46b7-9928-1014880d4acb"
                  />
                  <noscript>
                    <Image
                      width={50}
                      height={50}
                      alt="Zalo"
                      src="https://firebasestorage.googleapis.com/v0/b/cokhiphuongtung-960eb.appspot.com/o/zalo.png?alt=media&token=4c9738d5-22fc-46b7-9928-1014880d4acb"
                    />
                  </noscript>
                </a>
              </div>
            </div>
          </div>

          <div id="phone-vr" className="button-contact">
            <div className="phone-vr">
              <div className="phone-vr-circle-fill"></div>
              <div className="phone-vr-img-circle">
                <a href={`tel:${Contact?.Hotline}`}>
                  <Image
                    width={50}
                    height={50}
                    alt="Phone"
                    src="https://firebasestorage.googleapis.com/v0/b/cokhiphuongtung-960eb.appspot.com/o/phone.png?alt=media&token=36678a00-f116-4db3-b3a0-1e9d2d196848"
                  />
                  <noscript>
                    <Image
                      width={50}
                      height={50}
                      alt="Phone"
                      src="https://firebasestorage.googleapis.com/v0/b/cokhiphuongtung-960eb.appspot.com/o/phone.png?alt=media&token=36678a00-f116-4db3-b3a0-1e9d2d196848"
                    />
                  </noscript>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotline1;
