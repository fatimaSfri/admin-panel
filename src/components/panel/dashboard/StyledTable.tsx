import { styled } from "@mui/material/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Pagination,
  Button,
  Box,
} from "@mui/material";
import { type Theme } from "@mui/material/styles";

export const StyledTableContainer = styled(TableContainer)({
  maxWidth: "812px",
  width: "100%",
  borderRadius: "10px",
  border: "1px solid #313A4B",
});

export const StyledTable = styled(Table)(({ theme }: { theme: Theme }) => ({
  width: "100%",
  borderCollapse: "collapse",
  backgroundColor: theme.palette.primary.main,
}));

export const StyledTableHead = styled(TableHead)({});

export const StyledTableRow = styled(TableRow)({});

export const TableTypography = styled(Typography)(() => ({
  borderBottomColor: "#313A4B",
  fontFamily: "Niramit",
  fontSize: "14px",
  lineHeight: "100%",
  letterSpacing: "0px",
  textTransform: "capitalize",
  color: "#ffffff",
}));

export const TableButton = styled(Button)(({ theme }: { theme: Theme }) => ({
  width: "93px",
  height: "29px",
  fontSize: "12px",
  fontFamily: "NiramitBold",
  borderRadius: "8px",
  textTransform: "capitalize",
  backgroundColor: "#40A578",
  color: "#035610",
  [theme.breakpoints.down("sm")]: {
    minWidth: "70px",
    height: 28,
    fontSize: "11px",
  },
}));

export const StyledHeadTableCell = styled(TableCell)({
  minWidth: "58px",
  borderBottomColor: "#313A4B",
  fontFamily: "NiramitBold",
  fontSize: "14px",
  lineHeight: "100%",
  letterSpacing: "0px",
  textTransform: "capitalize",
  color: "#ABABAB",
  textAlign: "center",
  verticalAlign: "middle",
});

export const StyledBodyTableCell = styled(TableCell)({
  borderBottomColor: "#313A4B",
  fontFamily: "Niramit",
  fontSize: "14px",
  lineHeight: "100%",
  letterSpacing: "0px",
  textTransform: "capitalize",
  color: "#ffffff",
  textAlign: "center",
  verticalAlign: "middle",
});

export const StyledTableBody = styled(TableBody)({});

export const RoundedPagination = styled(Pagination)(({ theme }) => ({
  "& .MuiPaginationItem-root": {
    borderRadius: "50%",
    width: "34px",
    height: "34px",
    minWidth: "34px",
    margin: "0 5px",
    border: "1px solid #313A4B",
    color: "#ABABAB",
    "&:hover": {
      backgroundColor: "#40A578 ",
      boxShadow: "none !important",
      border: "1px solid #313A4B !important",
    },
  },
  "& .Mui-selected": {
    backgroundColor: "#40A578 !important",
    boxShadow: "0px 4px 10px 0px #40A57880",
    color: "#fff",
  },
  [theme.breakpoints.down("sm")]: {
    "& .MuiPaginationItem-root": {
      width: 30,
      height: 30,
      minWidth: 30,
      fontSize: "0.75rem",
    },
  },
}));

export const StyledAccordion = styled(Accordion)(({ theme }) => ({
  margin: "0 !important",
  backgroundColor: theme.palette.primary.main,
  borderBottom: "1px solid #313A4B",
  borderRadius: "2px !important",
  overflow: "hidden",
  boxShadow: "none",
  "&:before": { display: "none" },
}));

export const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  borderBottom: "1px solid #313A4B",
  minHeight: "48px !important",
  "& .MuiAccordionSummary-content": {
    margin: "0 !important",
    display: "flex",
    alignItems:"center",
    gap:"50px",
    width: "100%",
    fontFamily: "NiramitBold",
    fontSize: "14px",
    color: "#ABABAB",
  },
  "& .MuiSvgIcon-root": {
    color: "#ABABAB",
    fontSize: "22px",
  },
}));

export const StyledAccordionDetails = styled(AccordionDetails)(() => ({
 fontSize: "14px",
  color: "#FFFFFF",
  textTransform: "capitalize",
  display:"flex",
  gap:20,
  flexWrap:"wrap",
  alignItems:"center"
}));

export const FirstAccordion = styled(StyledAccordion)({
  borderTop: "1px solid #313A4B",
  borderLeft: "1px solid #313A4B",
  borderRight: "1px solid #313A4B",
  borderTopLeftRadius: "10px !important",
  borderTopRightRadius: "10px !important",
});

export const LastAccordion = styled(StyledAccordion)({
  borderLeft: "1px solid #313A4B",
  borderRight: "1px solid #313A4B",
  borderBottom: "1px solid #313A4B",
  borderBottomLeftRadius: "10px !important",
  borderBottomRightRadius: "10px !important",
});

export const TableBox = styled(Box)({
  display: "flex",
  gap: "9px",
  alignItems: "center",
  justifyContent: "center",
});

// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import { useState } from "react";

// export default function ResponsiveTable() {
//   const isMobile = useMediaQuery("(max-width:600px)");

//   const rows = [{ id: 2, name: "hi", price: "2000$" },
//     { id: 1, name: "hi", price: "2000$" }
//   ];

//   const [page, setPage] = useState(1);
//   const totalPages = 4;

//   return (
//     <Box>
//       {/* Desktop Table */}
//       {!isMobile && (
//         <StyledTableContainer>
//           <StyledTable>
//             <StyledTableHead>
//               <TableRow>
//                 <StyledHeadTableCell>ID</StyledHeadTableCell>
//                 <StyledHeadTableCell>Name</StyledHeadTableCell>
//                 <StyledHeadTableCell>Price</StyledHeadTableCell>
//               </TableRow>
//             </StyledTableHead>

//             <StyledTableBody>
//               {rows.map((row) => (
//                 <StyledTableRow key={row.id}>
//                   <StyledBodyTableCell>{row.id}</StyledBodyTableCell>
//                   <StyledBodyTableCell>{row.name}</StyledBodyTableCell>
//                   <StyledBodyTableCell><TableButton/>
//                   </StyledBodyTableCell>
//                 </StyledTableRow>
//               ))}
//             </StyledTableBody>
//           </StyledTable>
//         </StyledTableContainer>
//       )}

//       {/* Mobile Collapse */}
//       {isMobile && (
//         <Box>
//           {/* {rows.map((row) => (
//             <StyledAccordion key={row.id}>
//               <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
//                 <Box
//                   display="flex"
//                   justifyContent="space-between"
//                   width="100%"
//                   sx={{ border: "2px solid red" }}
//                 >
//                   <Typography >{row.name}:</Typography>
//                   <Typography >{row.price}</Typography>
//                 </Box>
//               </StyledAccordionSummary>
//               <StyledAccordionDetails>
//                 <Typography>ID: {row.id}</Typography>
//                 <Typography>Price: {row.price}$</Typography>
//               </StyledAccordionDetails>
//             </StyledAccordion>
//           ))} */}

//           {rows.map((row, index) => {
//   const Acc =
//     index === 0
//       ? FirstAccordion
//       : index === rows.length - 1
//       ? LastAccordion
//       : StyledAccordion;

//   return (
//     <Acc key={row.id} defaultExpanded={index === 0}>
//       <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
//         <Typography>{row.name}</Typography>
//         <Typography>{row.price}</Typography>
//       </StyledAccordionSummary>

//       <StyledAccordionDetails>
//         <Typography>ID: {row.id}</Typography>
//         <Typography>Price: {row.price}$</Typography>
//       </StyledAccordionDetails>
//     </Acc>
//   );
// })}

//         </Box>
//       )}

//       <Box display="flex" justifyContent="center" mt="20px">
//         <RoundedPagination
//           count={totalPages}
//           page={page}
//           onChange={(e, val) => setPage(val)}
//           siblingCount={1}
//           boundaryCount={1}
//           hidePrevButton
//           hideNextButton
//           showFirstButton={false}
//           showLastButton={false}
//         />
//       </Box>
//     </Box>
//   );
// }
