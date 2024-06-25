import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import wedding from "../../assets/wedding.png";
import services from "../../assets/services.png"
import decor from "../../assets/decor.png"

export default function LabTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1 ,borderColor: "divider" }}>
          <TabList onChange={handleChange}  aria-label="lab API tabs example">
            <Tab sx={{ color: "white",width:"30%" }} label="Decor" value="1" />
            <Tab sx={{ color: "white",width:"30%" }} label="Wedding" value="2" />
            <Tab sx={{ color: "white",width:"30%" }} label="Services" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <div className="flex">
            <h1 className="w-4/5 ">
              Transform your venue with stunning decorations that reflect your
              style and theme. From elegant floral arrangements to dazzling
              lighting setups, we create the perfect ambiance for your event.We
              believe every event is unique. Our dedicated team works closely
              with you to tailor our services to your specific needs and
              preferences, ensuring a personalized and unforgettable experience
            </h1>
            <div className="w-1/5">
            <img className="h-3/4 pb-6" src={decor} alt="" />
            </div>
          </div>
        </TabPanel>
        <TabPanel value="2">
          <div className="flex">
            <h1 className="w-4/5 ">
              Make your dream wedding a reality with our expert planning and
              coordination. We handle everything from venue selection and decor
              to catering and entertainment, so you can focus on celebrating
              your big day.With meticulous planning and flawless execution, we
              ensure your event runs smoothly from start to finish. Our
              experienced coordinators manage all aspects of the event, allowing
              you to enjoy every moment stress-free.
            </h1>
            <div className="w-1/5 ">
              <img className="h-3/4 pb-6" src={wedding} alt="" />
            </div>
          </div>
        </TabPanel>
        <TabPanel value="3">
          <div className="flex gap-4" >
            <h1 className="w-4/5 " >
              Whether it's a corporate event, birthday party, or any special
              occasion, our team provides a full range of services including
              catering, photography, entertainment, and more. We take care of
              all the details to ensure your event is a success.
            </h1>
            <div className="w-1/5" >
            <img src={services} className="h-3/4 pb-6" alt="" />
            </div>
          </div>
        </TabPanel>
      </TabContext>
    </Box>
  );
}
