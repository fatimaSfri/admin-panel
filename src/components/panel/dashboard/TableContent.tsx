import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, TableRow, useMediaQuery } from "@mui/material";
import { useState } from "react";
import {
  FirstAccordion,
  LastAccordion,
  StyledAccordion,
  StyledAccordionDetails,
  StyledAccordionSummary,
  StyledBodyTableCell,
  StyledHeadTableCell,
  StyledTable,
  StyledTableBody,
  StyledTableContainer,
  StyledTableHead,
  StyledTableRow,
  TableButton,
  RoundedPagination,
  TableTypography,
  TableBox,
} from "./StyledTable";
import IconFrom from "../../../assets/img/tether2.svg";
import IconTo from "../../../assets/img/PM2.svg";

export default function TableContent() {
  const isMobile = useMediaQuery("(max-width:900px)");
  const statuses = {
    Successful: { text: "Successful", bg: "#40A578", color: "#035610" },
    Unsuccessful: { text: "Unsuccessful", bg: "#F66066", color: "#60140F" },
    Checking: { text: "Checking", bg: "#F3AC76", color: "#603E0F" },
  };

  const rows = Array.from({ length: 28 }, (_, i) => {
    const dayInWeek = i % 7;
    let status;
    if (dayInWeek === 1) {
      status = statuses.Unsuccessful;
    } else if (dayInWeek === 2) {
      status = statuses.Checking;
    } else {
      status = statuses.Successful;
    }
    return {
      id: i + 1,
      nameFrom: "USDT",
      iconFrom: IconFrom,
      nameTo: "PM",
      iconTo: IconTo,
      amount: "1000",
      received: "1200",
      date: "25-02-2023",
      status: status,
      link: "See More",
    };
  });

  console.log(rows);

  const [page, setPage] = useState(1);
  const rowsPerPage = 7;
  const totalPages = Math.ceil(rows.length / rowsPerPage);

  const displayedRows = rows.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  return (
    <Box>
      {/* Desktop Table */}
      {!isMobile && (
        <StyledTableContainer>
          <StyledTable>
            <StyledTableHead>
              <TableRow>
                <StyledHeadTableCell>From</StyledHeadTableCell>
                <StyledHeadTableCell>To</StyledHeadTableCell>
                <StyledHeadTableCell>Amount</StyledHeadTableCell>
                <StyledHeadTableCell>Received</StyledHeadTableCell>
                <StyledHeadTableCell>Date</StyledHeadTableCell>
                <StyledHeadTableCell>Status</StyledHeadTableCell>
                <StyledHeadTableCell>Link</StyledHeadTableCell>
              </TableRow>
            </StyledTableHead>

            <StyledTableBody>
              {displayedRows.map((row) => (
                <StyledTableRow key={row.id}>
                  {/* from */}
                  <StyledBodyTableCell>
                    <TableBox>
                      <Box component="img" src={row.iconFrom}></Box>
                      <TableTypography>{row.nameFrom}</TableTypography>
                    </TableBox>
                  </StyledBodyTableCell>
                  {/* to */}
                  <StyledBodyTableCell>
                    <TableBox>
                      <Box component="img" src={row.iconTo}></Box>
                      <TableTypography>{row.nameTo}</TableTypography>
                    </TableBox>
                  </StyledBodyTableCell>
                  {/* Amount */}
                  <StyledBodyTableCell>{row.amount}</StyledBodyTableCell>
                  {/* Received */}
                  <StyledBodyTableCell>{row.received}</StyledBodyTableCell>
                  {/* Date */}
                  <StyledBodyTableCell>{row.date}</StyledBodyTableCell>
                  {/* Status */}
                  <StyledBodyTableCell>
                    <TableButton
                      sx={{
                        backgroundColor: row.status?.bg,
                        color: row.status?.color,
                      }}
                    >
                      {row.status?.text}
                    </TableButton>
                  </StyledBodyTableCell>
                  {/* Link */}
                  <StyledBodyTableCell>{row.link}</StyledBodyTableCell>
                </StyledTableRow>
              ))}
            </StyledTableBody>
          </StyledTable>
        </StyledTableContainer>
      )}

      {/* Mobile Collapse */}
      {isMobile && (
        <Box>
          {displayedRows.map((row, index) => {
            const Acc =
              index === 0
                ? FirstAccordion
                : index === rows.length - 1
                ? LastAccordion
                : StyledAccordion;

            return (
              <Acc key={row.id} defaultExpanded={index === 0}>
                {/* summary */}
                <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Box display="flex" alignItems="center" gap="8px">
                    From : <Box component="img" src={row.iconFrom}></Box>
                    <TableTypography>{row.nameFrom}</TableTypography>
                  </Box>
                  <Box display="flex" alignItems="center" gap="8px" pr="20px">
                    To : <Box component="img" src={row.iconTo}></Box>
                    <TableTypography>{row.nameTo}</TableTypography>
                  </Box>
                </StyledAccordionSummary>
                {/* details */}
                <StyledAccordionDetails >
                  <TableTypography>Amount : {row.amount}</TableTypography>
                  <TableTypography>Received : {row.received}</TableTypography>
                  <TableTypography>Date : {row.date}</TableTypography>

                  <TableTypography>Link : {row.link}</TableTypography>
                  <TableButton
                    sx={{
                      backgroundColor: row.status?.bg,
                      color: row.status?.color,
                    }}
                  >
                    {row.status?.text}
                  </TableButton>
                </StyledAccordionDetails>
              </Acc>
            );
          })}
        </Box>
      )}

      <Box display="flex" justifyContent="center" mt="20px">
        <RoundedPagination
          count={totalPages}
          page={page}
          onChange={(_, val) => setPage(val)}
          siblingCount={1}
          boundaryCount={1}
          hidePrevButton
          hideNextButton
          showFirstButton={false}
          showLastButton={false}
        />
      </Box>
    </Box>
  );
}
