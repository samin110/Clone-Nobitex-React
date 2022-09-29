import * as React from "react";
import { styled } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme } from "@mui/material/styles";

// const useStyle = makeStyles(() => ({}));

const theme = createTheme({
  typography: {
    fontSize: 18,
    fontFamily: "vazir",
    body1: {
      fontWeight: 500,
    },
  },
});

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  background: "white",
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ExpandMoreIcon sx={{ fontSize: "1.7rem", color: "black" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "white",
  padding: "10px 20px",
  border: "1px solid #E3E4E5",
  borderRadius: "5px",
  marginBottom: "20px",
  flexDirection: "row",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(180deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: "2px 20px 0 10px",
  marginBottom: "50px",
  fontSize: "1rem",
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls='panel1d-content' id='panel1d-header'>
          <ThemeProvider theme={theme}>
            <Typography>ارزش بیت کوین چطور مشخص می شود؟</Typography>
          </ThemeProvider>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant='typography'>
            ارزش بیت‌کوین هم مانند پول‌ کشورها، نوسان دارد اما این ارزش توسط
            افراد یا گروه مشخصی تعیین نمی‌شود، بلکه عرضه و تقاضا عامل اصلی است
            که ارزش و قیمت بیت‌کوین را به شکل صعودی یا نزولی هدایت می‌کنند.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls='panel2d-content' id='panel2d-header'>
          <ThemeProvider theme={theme}>
            <Typography>از کجا بیت کوین بخریم؟</Typography>
          </ThemeProvider>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant='typography'>
            نوبیتکس به عنوان اولین و معتبرترین بازار ایرانی تبادل ارزهای
            دیجیتال، با راهکار امن، سریع و مطمئن بهترین بستر برای خرید بیت‌کوین
            بدون واسطه است.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls='panel4d-content' id='panel4d-header'>
          <ThemeProvider theme={theme}>
            <Typography>
              قیمت بیت کوین در نوبیتکس چگونه تعیین می شود؟
            </Typography>
          </ThemeProvider>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant='typography'>
            قیمت خرید توسط خود شما یا براساس نرخ‌گذاری فروشندگان انجام می‌شود.
            در بازار آنلاین نوبیتکس دو روش ثبت سفارش پیش روی شما قرار دارد که به
            شرح زیر هستند • سفارش‌گذاری با قیمت مدنظر خود در بازار که با نام
            سفارش محدود شناخته می‌شود. • ثبت سفارش بر اساس قیمت‌ تعیین شده توسط
            فروشندگان که سفارش سریع نیز نامیده می شود.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls='panel3d-content' id='panel3d-header'>
          <ThemeProvider theme={theme}>
            <Typography>کارمزد نوبیتکس در خرید و فروش چقدر است؟</Typography>
          </ThemeProvider>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant='typography'>
            در نوبیتکس امکان خرید بیت کوین با کمترین کارمزد فراهم شده است.
            فرایند خرید و فروش بیت کوین در نوبیتکس، همچون بازار‌های معتبر جهانی
            دارای کارمزد است. میزان کارمزد درصدی از حجم کل مبادله است که از هر
            دو طرف خریدار و فروشنده دریافت می‌گردد. کارمزد در نظر گرفته شده برای
            بازار حرفه‌ای خرید و فروش بیت کوین 0.2 درصد (یا به عبارت ساده 2
            تومان در هر 1000 تومان معامله) است. اگر قصد خرید به ریال داشته
            باشید، میزان کارمزد به صورت بیت کوین از شما دریافت می‌شود و در صورت
            فروش ارزدیجیتال میزان کارمزد نیز بر اساس ریال محاسبه و دریافت
            می‌گردد.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary aria-controls='panel5d-content' id='panel5d-header'>
          <ThemeProvider theme={theme}>
            <Typography>آیا برای نگهداری بیت کوین باید هزینه کنم؟</Typography>
          </ThemeProvider>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant='typography'>
            تنها یک کیف‌پول به عنوان نگهدارنده بیت‌کوین، ارسال کننده و همچنین
            دریافت کننده آن نیاز است. از انواع این کیف‌پول‌ها می‌توان به
            نمونه‌هایی مانند کیف‌پول موبایل، دسکتاپ، تحت‌وب و سخت‌‌افزاری اشاره
            کرد. اگر از کیف‌پول موبایل، دسکتاپ، تحت‌وب و کاغذی استفاده کنید
            نیازی به پرداخت هزینه نیست اما کیف‌پول سخت‌افزاری باید خریداری شود و
            قطعا هزینه‌ خواهد داشت.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
