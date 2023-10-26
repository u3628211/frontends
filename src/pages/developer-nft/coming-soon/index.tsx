import SectionWrapper from "@/components/SectionWrapper"

import CheckElegbility from "./CheckElegbility"
import Header from "./Header"
import Purpose from "./Purpose"
import Stage from "./Stage"
import Stepper from "./Stepper"

const ComingSoon = () => {
  return (
    <SectionWrapper
      dark
      maxWidth="108rem"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pb: ["8rem", "16rem"],
        pt: 0,
        "& .MuiTypography-root": { color: theme => theme.palette.primary.contrastText },
      }}
    >
      <Header></Header>
      <Stepper></Stepper>
      <Purpose></Purpose>
      <Stage></Stage>
      <CheckElegbility></CheckElegbility>
    </SectionWrapper>
  )
}

export default ComingSoon
