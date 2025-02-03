import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import wedding from "../../assets/wedding.png";
import services from "../../assets/services.png";
import decor from "../../assets/decor.png";
import { Link } from "react-router-dom";

export default function LabTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab
              sx={{ color: "white", width: "30%" }}
              label="Decor"
              value="1"
            />
            <Tab
              sx={{ color: "white", width: "30%" }}
              label="Wedding"
              value="2"
            />
            <Tab
              sx={{ color: "white", width: "30%" }}
              label="Services"
              value="3"
            />
          </TabList>
        </Box>
        <TabPanel value="1">
          <div className="flex md:flex-row flex-col-reverse">
            <h1 className="md:w-4/5 w-full md:tracking-tight tracking-tighter">
              Transform your venue with stunning decorations that reflect your
              style and theme. From elegant floral arrangements to dazzling
              lighting setups, we create the perfect ambiance for your event.We
              believe every event is unique. Our dedicated team works closely
              with you to tailor our services to your specific needs and
              preferences, ensuring a personalized and unforgettable experience
              <br />
              <Link to="/decor" className="text-blue-500 px-3 py-1 pl-1 mt-1 font-medium inline-block rounded-md bg-white" >More From Us</Link>
            </h1>
            <div className="md:w-1/5 flex justify-center md:justify-start w-full">
              <img
                className="md:h-3/4 h-[22vw] pb-2  md:pb-6"
                src={decor}
                alt=""
              />
            </div>
          </div>
        </TabPanel>
        <TabPanel value="2">
          <div className="flex  md:flex-row flex-col-reverse">
            <h1 className="md:w-4/5 w-full">
              Make your dream wedding a reality with our expert planning and
              coordination. We handle everything from venue selection and decor
              to catering and entertainment, so you can focus on celebrating
              your big day.With meticulous planning and flawless execution, we
              ensure your event runs smoothly from start to finish. Our
              experienced coordinators manage all aspects of the event, allowing
              you to enjoy every moment stress-free.
              <br />
              <Link to="/wedding" className="text-blue-500 px-3 py-1 pl-1 mt-1 font-medium inline-block rounded-md bg-white" >More From Us</Link>
            </h1>
            <div className="md:w-1/5 flex justify-center md:justify-start w-full">
              <img
                className="md:h-3/4 h-[22vw] pb-2  md:pb-6"
                src={wedding}
                alt=""
              />
            </div>
          </div>
        </TabPanel>
        <TabPanel value="3">
          <div className="flex md:flex-row flex-col-reverse">
            <h1 className="md:w-4/5 w-full ">
              Whether it's a corporate event, birthday party, or any special
              occasion, our team provides a full range of services including
              catering, photography, entertainment, and more. We take care of
              all the details to ensure your event is a success.
              <br />
              <Link to="/services" className="text-blue-500 px-3 py-1 pl-1 mt-1 font-medium inline-block rounded-md bg-white" >More From Us</Link>
            </h1>
            <div className="md:w-1/5 flex justify-center md:justify-start w-full">
              <img
                src={services}
                className="md:h-3/4 h-[22vw] pb-2  md:pb-6"
                alt=""
              />
            </div>
          </div>
        </TabPanel>
      </TabContext>
    </Box>
  );
}
