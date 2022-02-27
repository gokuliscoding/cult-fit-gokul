import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import "./CultSport.css";
import Faq from "react-faq-component";
import { AiOutlineDown } from "react-icons/ai";
import "./CultSportBestSellers.css";
import { CultSportBestSellers } from "./CultSportBestSellers";
import { Link } from "react-router-dom";

export const CultSport = () => {
  const data = {
    title: `FAQS`,
    rows: [
      {
        title: `What is cultsport and what does it offer?`,
        content: `cultsport is a premium workout wear brand from the house of cure.fit. cultsport offers a variety <br> of premium workout and sports gear that helps fitness enthusiasts and everyday athletes up <br> their daily fitness game and look good while they are at it. With a goal to bring top notch <br> products with a foot forward in fashion, longevity and functionality, cultsport attempts at <br> bringing the best performing apparel, footgear and accessories ideal for all workout <br> formats. Read here to know in detail how cultsport is designed to enhance your workout here.`,
      },
      {
        title: "What makes cultsport special?",
        content: `cultsport is a carefully crafted array of apparel and accessories which aims to ensure that you <br> wear fabric exactly suited to the activity you wish to engage in. Be it fly-dry fabrics to ensure <br> superior sweat absorption and drying, stretchable fabrics to help your workout movement <br> range, breathable ones to aid your running experience and design elements that ensure minimal <br> chafing and odour resistance (anti-microbial elements). We've got them all! Read here to know <br> in detail how cultsport is designed to enhance your workout.`,
      },
      {
        title: "How do I track my cultsport order?",
        content: `We know you're eager to get your order :) You can easily track your cultsport order by following <br> the below steps: 1. Log into the cure.fit app and tap on the profile section.  2. Go to 'Orders' 3. <br> Tap the order you wish to track  4. It will open up an 'Order Detail' page with the items you've <br> ordered listed in it  5. Click on the item wish to track to see the delivery status of that item on <br> the 'Track Shipment' screen`,
      },
      {
        title: "How do I cancel my cultsport Order?",
        content: `You can cancel your cultsport order by following the steps below:  Steps:  1. Please check the <br> delivery status of your order. To know how, click HERE.  2A If your cultsport order is in 'Order <br> Confirmed'/'Ready'/'Shipped' status, you can cancel your order from the cure.fit app by <br> following the steps listed below (How to cancel your order via app)  2B If your order is in <br> 'Packed' state, you would need to wait until it is 'Shipped' to cancel it via app.  2C If your order is <br> 'Out for Delivery', you would need to reject the order when our delivery executive reaches out <br> to you.  How to cancel your order via app:  1. Log into the cure.fit app and tap on the profile <br> section.  2. Go to orders  3. Tap the order you wish to cancel  4. It will open up an "Order Detail" <br> page with the items you've ordered listed in it  5. Click on the 'Cancel' button on the tiles of the <br> item(s) you wish to cancel  To know how refunds are processed in the event of a successful <br> cancellation, click HERE `,
      },
      {
        title:
          "I am not satisfied with my cultsport product. Can I return or exchange it?",
        content: `Yes you surely can. cultsport provides its customers a hassle-free 30 day, No-Questions-Asked <br> Return and Exchange policy. This allows you to return or exchange a product you don't like <br> within 30 days from order delivery.  How to decide whether you should return OR exchange: 1. <br> If you wish to change the size of the product you've received, please choose to Exchange the <br> product. Exchanges are subject to stock availability 2. If you wish to change the product itself <br> OR request for a different color, please choose to Return the product. (You would need to <br> purchase the preferred product separately) NOTE: In case of return, once the product is picked <br> up, the amount paid towards it will be credited into the same payment mode. Further, any <br>voucher used during purchase will be reactivated back on your account on product pickup (as <br> long as it has not expired). However, in case of orders with more than 1 item, the voucher will be <br> reactivated in full only once all the items in the order have been picked up.  `,
      },
      {
        title: "How can I pay for my cultsport order?",
        content: `We support the following payment modes:  1. Cash On Delivery (available in selected pin codes) <br> 2. Credit Card  3. Debit Card  4. Net banking  5. Fitcash (cure.fit's own currency)  6. Wallet <br> NOTE: Fitcash can be used simultaneously with any other payment mode.`,
      },
      {
        title: "How can I contact the delivery guy?",
        content: `All orders placed on cultsport are dispatched through our courier partners such as Blue Dart, <br> Delhivery etc. Since the delivery assignment is handled at their end, we will not be able to share <br>the delivery person’s contact details. However, the delivery team will reach out to you on the <br> day of delivery.`,
      },
    ],
  };

  const styles = {
    bgColor: "#F2F4F8",
    titleTextColor: "black",
    rowTitleColor: "#806A6A",
    rowContentColor: "#888EB5",
    arrowColor: "#FF316D",
    rowContentPaddingLeft: "100px",
  };

  const config = {
    animate: true,
    arrowIcon: <AiOutlineDown />,
    tabFocus: true,
  };

  const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

  const images = [
    {
      imgPath:
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_3000:1200/dpr_2/image/vm/c44cb069-a7fd-46f6-8cdd-18434513bba7.png",
    },
    {
      imgPath:
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_3000:1200/dpr_2/image/vm/9d0fca00-f5bc-4476-8a93-d9e72eb4d0a4.png",
    },
    {
      imgPath:
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_3000:1200/dpr_2/image/vm/ba25796f-60c3-4011-8574-ee68a270e4b9.png",
    },
    {
      imgPath:
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_3000:1200/dpr_2/image/vm/95def045-a089-4723-b647-58f640a37fdf.png",
    },
    {
      imgPath:
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_3000:1200/dpr_2/image/vm/50791be6-3fe4-4c3c-89fd-79aefa2813a1.png",
    },
  ];

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <>
      <div>
        <img
          src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:596/dpr_2/image/vm/438b10c9-909f-45eb-a5f2-e7546894a79a.png"
          alt="CultFit Store Banner"
        />
      </div>

      <div id="imagesGear">
        <Link to="landing/fsj-men">
          <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_420,ar_365:350/dpr_2/image/vm/a657acc2-6d43-4912-ab45-4031df9c1f3f.png"
            alt="Image Of Man"
            className="imageGear"
          />
        </Link>
        <Link to="landing/women-2021">
          <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_420,ar_365:350/dpr_2/image/vm/65c1c120-5c8f-4d98-8ed7-efebe6d1a277.png"
            alt="Image Of Woman"
            className="imageGear"
          />
        </Link>
        <Link to="landing/SpinBike">
          <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_420,ar_365:350/dpr_2/image/vm/625df537-224a-46b8-b5f7-936c6666ee56.png"
            alt="Image Of Spin Bike"
            className="imageGear"
          />
        </Link>
        <Link to="landing/Cycle-fit">
          <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_420,ar_365:350/dpr_2/image/vm/aab7c5f3-87a2-4535-92cd-719743c504e1.png"
            alt="Image Of Cycles"
            className="imageGear"
          />
        </Link>
        <Link to="landing/Footwear">
          <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_420,ar_365:350/dpr_2/image/vm/8765ee6c-d1f4-4113-8ac8-e5614844b805.png"
            alt="Images Of Footwear"
            className="imageGear"
          />
        </Link>
        <Link to="landing/Treadmill">
          <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_420,ar_365:350/dpr_2/image/vm/b59fbb0e-bac2-41bf-a652-4abcab6a041b.png"
            alt="Image Of Treadmills"
            className="imageGear"
          />
        </Link>
      </div>

      <div id="shopByWorkout">Shop by Workout</div>

      <div id="shopByWorkoutImages">
        <img
          src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_420,ar_530:700/dpr_2/image/vm/06a67be8-5b49-49b9-83b1-af4e6fa6461b.png"
          alt="YOGA"
          className="shopByWorkoutImage"
        />

        <img
          src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_420,ar_530:700/dpr_2/image/vm/a026ae3f-fc71-4403-aa75-b03226b7c36f.png"
          alt="STRENGTH"
          className="shopByWorkoutImage"
        />
        <img
          src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_420,ar_530:700/dpr_2/image/vm/c0ae83e6-a054-448f-b658-f214863779ce.png"
          alt="RUNNING"
          className="shopByWorkoutImage"
        />
        <img
          src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_420,ar_530:700/dpr_2/image/vm/6dbd08ab-43d5-4f35-abab-d283384f7904.png"
          alt="DANCE"
          className="shopByWorkoutImage"
        />
      </div>

      <Box>
        <Paper
          square
          elevation={0}
          sx={{
            display: "flex",
            alignItems: "center",
            pl: 2,
            bgcolor: "background.default",
          }}
        ></Paper>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box component="img" src={step.imgPath} alt={step.label} />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button onClick={handleNext} disabled={activeStep === maxSteps - 1}>
              <ChevronRightIcon />
            </Button>
          }
          backButton={
            <Button onClick={handleBack} disabled={activeStep === 0}>
              <ChevronLeftIcon />
            </Button>
          }
        />
      </Box>

      <div id="shopByCategory">Shop by Category</div>

      <div id="shopByCategoryImages">
        <img
          src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_420,ar_365:350/dpr_2/image/vm/7bc7142d-f87e-43ab-8396-3fcc71a6bee6.png"
          className="shopByCategoryImage"
          alt="T-Shirts"
        />
        <img
          src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_420,ar_365:350/dpr_2/image/vm/df6a4e2b-8239-4cf2-9ba4-7123a34a6fbf.png"
          className="shopByCategoryImage"
          alt="Sweatshirts"
        />
        <img
          src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_420,ar_365:350/dpr_2/image/vm/b7ce6f01-ba33-4c57-b6e5-918dd06b8633.png"
          className="shopByCategoryImage"
          alt="Joggers"
        />
        <img
          src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_420,ar_365:350/dpr_2/image/vm/1ab48e88-474e-4cad-9040-a23d138360ef.png"
          className="shopByCategoryImage"
          alt="Sports Bra"
        />
        <img
          src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_420,ar_365:350/dpr_2/image/vm/b7755cc7-80f8-4ad4-a00f-90e9271ffc74.png"
          className="shopByCategoryImage"
          alt="Equipment"
        />
        <img
          src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_420,ar_365:350/dpr_2/image/vm/7597af64-463f-41f7-a0ac-b5f45f5f7747.png"
          className="shopByCategoryImage"
          alt="Tights"
        />
        <img
          src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_420,ar_365:350/dpr_2/image/vm/ec2f8bda-b841-4a81-bbdc-8e90114f1637.png"
          className="shopByCategoryImage"
          alt="Footwear"
        />
        <img
          src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_420,ar_365:350/dpr_2/image/vm/12fca99c-8bbe-4069-99bb-1599be03ba68.png"
          className="shopByCategoryImage"
          alt="Accessories"
        />
        <img
          src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_420,ar_365:350/dpr_2/image/vm/7ccb9b98-89c9-4dcf-a2a9-2464d55efc61.png"
          className="shopByCategoryImage"
          alt="Shorts"
        />
        <img
          src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_420,ar_365:350/dpr_2/image/vm/96bf757f-baaf-4443-8194-f163b307e4e4.png"
          className="shopByCategoryImage"
          alt="Vitamins"
        />
        <img
          src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_420,ar_365:350/dpr_2/image/vm/7a42b018-6783-4494-96b7-4395c3c5af11.png"
          className="shopByCategoryImage"
          alt="Spin Bikes"
        />
        <img
          src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_420,ar_365:350/dpr_2/image/vm/41274bec-349b-467a-9f5f-6edffd96d10d.png"
          className="shopByCategoryImage"
          alt="Treadmills"
        />
        <img
          src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_420,ar_365:350/dpr_2/image/vm/1eea0631-5bb8-4dcc-86c0-567a92260e67.png"
          className="shopByCategoryImage"
          alt="Cycles"
        />
        <img
          src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_420,ar_365:350/dpr_2/image/vm/b3b509d0-ad7e-4e60-b088-72a991adfef6.png"
          className="shopByCategoryImage"
          alt="Under 999"
        />
        <img
          src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_420,ar_365:350/dpr_2/image/vm/a1461493-5700-4fe2-8867-2086ac3b7da5.png"
          className="shopByCategoryImage"
          alt="Yoga"
        />
      </div>

      <div id="spotlight">Spotlight</div>

      <div id="spotlightImages">
        <img
          src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_420,ar_1080:600/dpr_2/image/vm/236187b6-218f-4d36-ad13-a47515b2b385.png"
          alt="Wheelchair"
          className="spotlightImage"
        />
        <img
          src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_420,ar_1080:600/dpr_2/image/vm/89567047-8d49-493a-b032-4e48df8e112d.png"
          alt="Weird Pose"
          className="spotlightImage"
        />
      </div>

      <CultSportBestSellers />

      <Faq data={data} styles={styles} config={config} />
    </>
  );
};
