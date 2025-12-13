import { Box } from "@mui/material"
import { AppTypographyBold, AppTypographySemiBold } from "../../Use-everywhere/AppTypography "
import CopyBox from "./CopyInput"
import WalletBox from "./WalletBox"
import {FriendsIcon} from "./Icon"
import WalletText from "./WalletText"
import WalletTable from "./WalletTable"

const PartnerProgram = () => {
  return (
    <Box sx={{margin:"19px 4px 34px -3px"  ,boxSizing:"border-box"}}>
      <Box display="flex" flexDirection="column" gap="11px" >
       <AppTypographyBold sx={{mb:"5px"}}>your affiliate link :</AppTypographyBold>
        <CopyBox />
         <Box sx={{
          display:"flex",
          gap:"23px",
          flexDirection:{xs:"column" , md:"row"},
          flexWrap:{xs:"wrap" , md:"nowrap"}
         }}>
          <WalletBox/>
           <WalletBox showButton={false} 
           logoColor="#F05A7E"
           logoShadow="0px 4px 20px 0px #F05A7E80"
            title="your friends "
            amount="32"
            padding="22px 49px 23px 32px"
            icon={<FriendsIcon/>}
            />
         </Box>
          <WalletText/>
      </Box>
      {/* table box */}
      <Box mt="42px"
      display="flex" flexDirection="column" gap="22px">
         <AppTypographySemiBold>Your  impressions</AppTypographySemiBold>
         <WalletTable/>
      </Box>

    </Box>
  )
}

export default PartnerProgram