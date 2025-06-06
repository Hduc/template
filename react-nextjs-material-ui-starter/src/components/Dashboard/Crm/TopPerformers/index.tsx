"use client";

import * as React from "react";
import Image from "next/image";
import {
  Card,
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TablePagination,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";
import Link from "next/link";
import { useTheme } from "@mui/material/styles";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import CustomDropdown from "./CustomDropdown";
import { useParams } from "next/navigation";

interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number
  ) => void;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleBackButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page + 1);
  };

  return (
    <Box
      sx={{
        flexShrink: 0,
        display: "flex",
        gap: "10px",
      }}
      className="ml-15"
    >
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
        sx={{
          borderRadius: "4px",
          padding: "6px",
        }}
        className="border"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>

      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
        sx={{
          borderRadius: "4px",
          padding: "6px",
        }}
        className="border"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
    </Box>
  );
}

function createData(
  id: number,
  image: string,
  name: string,
  email: string,
  viewLink: string
) {
  return {
    id,
    image,
    name,
    email,
    viewLink,
  };
}

const rows = [
  createData(1, "/images/users/user6.jpg", "Alex Davis", "alex@trezo.com", "#"),
  createData(
    2,
    "/images/users/user7.jpg",
    "Laura Martinez",
    "laura@trezo.com",
    "#"
  ),
  createData(
    3,
    "/images/users/user8.jpg",
    "Mark Thompson",
    "mark@trezo.com",
    "#"
  ),
  createData(
    4,
    "/images/users/user9.jpg",
    "Rachel White",
    "rachel@trezo.com",
    "#"
  ),
  createData(
    5,
    "/images/users/user10.jpg",
    "Kevin Lee",
    "kevin@trezo.com",
    "#"
  ),
  createData(
    6,
    "/images/users/user1.jpg",
    "Oliver Johnson",
    "oliver@trezo.com",
    "#"
  ),
  createData(7, "/images/users/user2.jpg", "Jake Noah", "jake@trezo.com", "#"),
  createData(
    8,
    "/images/users/user3.jpg",
    "Callum Mason",
    "callum@trezo.com",
    "#"
  ),
  createData(
    9,
    "/images/users/user4.jpg",
    "Robert Kyle",
    "robert@trezo.com",
    "#"
  ),
  createData(
    10,
    "/images/users/user10.jpg",
    "Thomas Joe",
    "thomas@trezo.com",
    "#"
  ),
].sort((b, a) => (a.id < b.id ? -1 : 1));

const TopPerformers: React.FC = () => {
  const { lang } = useParams();

  // Table
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <Card
        sx={{
          boxShadow: "none",
          borderRadius: "7px",
          mb: "25px",
          padding: { xs: "18px", sm: "20px", lg: "25px" },
        }}
        className="rmui-card"
      >
        <Box
          sx={{
            display: { xs: "block", sm: "flex" },
            alignItems: "center",
            justifyContent: "space-between",
            mb: "25px",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "16px", md: "18px" },
              fontWeight: 700,
            }}
            className="text-black"
          >
            Top Performers
          </Typography>

          <Box
            sx={{
              display: { xs: "block", sm: "flex" },
              mt: { xs: "10px", sm: "0" },
              alignItems: "center",
            }}
          >
            <CustomDropdown
              options={["This Week", "This Month", "This Year"]} // Need to change the options also in CustomDropdown file
              onSelect={(value) => console.log(value)}
              defaultLabel="This Week"
            />
          </Box>
        </Box>

        {/* Table */}
        <TableContainer
          component={Paper}
          sx={{
            boxShadow: "none",
          }}
          className="rmui-table border-top"
        >
          <Table sx={{ minWidth: 300 }} aria-label="Top Performers Table">
            <TableBody>
              {(rowsPerPage > 0
                ? rows.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : rows
              ).map((row) => (
                <TableRow key={row.id}>
                  <TableCell
                    sx={{
                      padding: "17px 0",
                      fontSize: "14px",
                    }}
                    className="text-black border-bottom"
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                      }}
                    >
                      <Box sx={{ flexShrink: "0" }}>
                        <Image
                          src={row.image}
                          alt="Product"
                          width={44}
                          height={44}
                          style={{ borderRadius: "100px" }}
                        />
                      </Box>

                      <Box>
                        <Typography
                          variant="h6"
                          sx={{
                            fontSize: "14px",
                            fontWeight: "500 !important",
                          }}
                          className="text-black"
                        >
                          {row.name}
                        </Typography>

                        <Typography
                          component="span"
                          className="text-body"
                          display="block"
                        >
                          {row.email}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>

                  <TableCell
                    sx={{
                      padding: "17px 0",
                    }}
                    className="text-end border-bottom"
                  >
                    <Link
                      href={`/${lang}${row.viewLink}`}
                      style={{
                        display: "inline-block",
                        borderRadius: "100px",
                        width: "36px",
                        height: "36px",
                        lineHeight: "36px",
                        textAlign: "center",
                      }}
                      className="text-body border tp-link"
                    >
                      <i
                        className="material-symbols-outlined"
                        style={{ fontSize: "18px", lineHeight: "inherit" }}
                      >
                        arrow_outward
                      </i>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell className="border-bottom" colSpan={5} />
                </TableRow>
              )}
            </TableBody>

            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                  colSpan={5}
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  slotProps={{
                    select: {
                      inputProps: {
                        "aria-label": "rows per page",
                      },
                      native: true,
                    },
                  }}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                  sx={{
                    border: "none",
                  }}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </Card>
    </>
  );
};

export default TopPerformers;
