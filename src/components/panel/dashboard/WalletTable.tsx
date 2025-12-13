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


export default function WalletTable() {
  const isMobile = useMediaQuery("(max-width:900px)");

  const statuses = {
    Done: { text: "Done", bg: "#40A578", color: "#035610" },
    Waiting: { text: "Waiting", bg: "#F3AC76", color: "#603E0F" },
  };

  // ---------- ROWS EXACTLY LIKE THE IMAGE ----------
  const rows = Array.from({ length: 4 }, (_, i) => ({
    id: i + 1,
    amount: "100",
    iconFrom: IconFrom,
    to: "X09aa998ee454c456255daf3ac94908f1dcfb7033",
    date: "25-02-2023",
    status: i === 1 ? statuses.Waiting : statuses.Done,
  }));

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
                <StyledHeadTableCell>Amount</StyledHeadTableCell>
                <StyledHeadTableCell>To</StyledHeadTableCell>
                <StyledHeadTableCell>Date</StyledHeadTableCell>
                <StyledHeadTableCell>Status</StyledHeadTableCell>
              </TableRow>
            </StyledTableHead>

            <StyledTableBody>
              {displayedRows.map((row) => (
                <StyledTableRow key={row.id}>
                  {/* Amount with icon */}
                  <StyledBodyTableCell>
                    <TableBox>
                      <Box component="img" src={row.iconFrom} />
                      <TableTypography>{row.amount}</TableTypography>
                    </TableBox>
                  </StyledBodyTableCell>

                  {/* To with icon */}
                  <StyledBodyTableCell>
                      <TableTypography>{row.to}</TableTypography>
                  </StyledBodyTableCell>

                  {/* Date */}
                  <StyledBodyTableCell>{row.date}</StyledBodyTableCell>

                  {/* Status */}
                  <StyledBodyTableCell>
                    <TableButton
                      sx={{
                        backgroundColor: row.status.bg,
                        color: row.status.color,
                      }}
                    >
                      {row.status.text}
                    </TableButton>
                  </StyledBodyTableCell>
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
                {/* Summary */}
                <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Box display="flex" alignItems="center" gap="8px">
                    <Box component="img" src={row.iconFrom} />
                    Amount: {row.amount}
                  </Box>
                </StyledAccordionSummary>

                {/* Details */}
                <StyledAccordionDetails>
                  <TableTypography>Date: {row.date}</TableTypography>

                  <TableButton
                    sx={{
                      backgroundColor: row.status.bg,
                      color: row.status.color,
                    }}
                  >
                    {row.status.text}
                  </TableButton>
                </StyledAccordionDetails>
              </Acc>
            );
          })}
        </Box>
      )}

      {/* Pagination only if needed */}
      {rows.length > rowsPerPage && (
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
      )}
    </Box>
  );
}
