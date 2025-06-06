"use client";

import React, { useState } from "react";
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
  TableHead,
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
import Select, { SelectChangeEvent } from "@mui/material/Select";

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
        padding: "0 20px",
      }}
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
  id: any,
  userImg: string,
  userName: string,
  email: string,
  phone: string,
  lastContacted: string,
  company: string,
  leadScore: number,
  status: string
) {
  return {
    id,
    userImg,
    userName,
    email,
    phone,
    lastContacted,
    company,
    leadScore,
    status,
  };
}

const rows = [
  createData(
    "#850",
    "/images/users/user6.jpg",
    "Oliver Khan",
    "oliver.khan@trezo.com",
    "+1 555-123-4567",
    "19 Jun 2024",
    "ABC Corporation",
    50,
    "Active"
  ),
  createData(
    "#851",
    "/images/users/user7.jpg",
    "Carolyn Barnes",
    "carolyn.barnes@trezo.com",
    "+1 555-987-6543",
    "18 Jun 2024",
    "XYZ Ltd",
    35,
    "Active"
  ),
  createData(
    "#852",
    "/images/users/user8.jpg",
    "Donna Miller",
    "donna.miller@trezo.com",
    "+1 555-456-7890",
    "17 Jun 2024",
    "Tech Solutions",
    40,
    "Deactivate"
  ),
  createData(
    "#853",
    "/images/users/user9.jpg",
    "Barbara Cross",
    "barbara.cross@trezo.com",
    "+1 555-369-7878",
    "16 Jun 2024",
    "Global Solutions",
    25,
    "Active"
  ),
  createData(
    "#854",
    "/images/users/user10.jpg",
    "Rebecca Block",
    "rebecca.block@trezo.com",
    "+1 555-658-4488",
    "15 Jun 2024",
    "Acme Industries",
    27,
    "Deactivate"
  ),
  createData(
    "#855",
    "/images/users/user11.jpg",
    "Ramiro McCarty",
    "ramiro.mccarty@trezo.com",
    "+1 555-558-9966",
    "14 Jun 2024",
    "Synergy Ltd",
    16,
    "Active"
  ),
  createData(
    "#856",
    "/images/users/user12.jpg",
    "Robert Fairweather",
    "robert.fairweather@trezo.com",
    "+1 555-357-5888",
    "13 Jun 2024",
    "Summit Solutions",
    38,
    "Active"
  ),
  createData(
    "#857",
    "/images/users/user13.jpg",
    "Marcelino Haddock",
    "marcelino.haddock@trezo.com",
    "+1 555-456-8877",
    "12 Jun 2024",
    "Strategies Ltd",
    15,
    "Active"
  ),
  createData(
    "#858",
    "/images/users/user14.jpg",
    "Thomas Wilson",
    "thomas.wilson@trezo.com",
    "+1 555-622-4488",
    "11 Jun 2024",
    "Tech Enterprises",
    41,
    "Deactivate"
  ),
  createData(
    "#859",
    "/images/users/user15.jpg",
    "Nathaniel Hulsey",
    "nathaniel.hulsey@trezo.com",
    "+1 555-225-4488",
    "10 Jun 2024",
    "Synetic Solutions",
    29,
    "Active"
  ),
  createData(
    "#860",
    "/images/users/user16.jpg",
    "Sophia Turner",
    "sophia.turner@trezo.com",
    "+1 555-123-4117",
    "9 Jun 2024",
    "Innovatech",
    35,
    "Active"
  ),
  createData(
    "#861",
    "/images/users/user17.jpg",
    "Liam Johnson",
    "liam.johnson@trezo.com",
    "+1 555-911-6543",
    "8 Jun 2024",
    "NextGen Solutions",
    56,
    "Active"
  ),
  createData(
    "#862",
    "/images/users/user18.jpg",
    "Emma Williams",
    "emma.williams@trezo.com",
    "+1 555-456-7811",
    "7 Jun 2024",
    "Tech Innovators",
    45,
    "Deactivate"
  ),
  createData(
    "#863",
    "/images/users/user19.jpg",
    "Noah Brown",
    "noah.brown@trezo.com",
    "+1 555-369-2278",
    "6 Jun 2024",
    "Global Ventures",
    125,
    "Active"
  ),
  createData(
    "#864",
    "/images/users/user20.jpg",
    "Ava Davis",
    "ava.davis@trezo.com",
    "+1 555-644-4488",
    "5 Jun 2024",
    "Acme Corp",
    20,
    "Deactivate"
  ),
  createData(
    "#865",
    "/images/users/user21.jpg",
    "William Martinez",
    "william.martinez@trezo.com",
    "+1 555-558-9336",
    "4 Jun 2024",
    "Synergy Innovations",
    49,
    "Active"
  ),
  createData(
    "#866",
    "/images/users/user22.jpg",
    "Isabella Garcia",
    "isabella.garcia@trezo.com",
    "+1 555-345-5888",
    "3 Jun 2024",
    "Summit Tech",
    77,
    "Active"
  ),
  createData(
    "#867",
    "/images/users/user23.jpg",
    "James Rodriguez",
    "james.rodriguez@trezo.com",
    "+1 555-456-8866",
    "2 Jun 2024",
    "Strategy Corp",
    155,
    "Active"
  ),
  createData(
    "#868",
    "/images/users/user24.jpg",
    "Mia Hernandez",
    "mia.hernandez@trezo.com",
    "+1 555-789-1234",
    "1 Jun 2024",
    "Tech Dynamics",
    60,
    "Active"
  ),
  createData(
    "#869",
    "/images/users/user25.jpg",
    "Alexander Lopez",
    "alexander.lopez@trezo.com",
    "+1 555-321-9876",
    "31 May 2024",
    "Innovative Solutions",
    85,
    "Deactivate"
  ),
].sort((b, a) => (a.id < b.id ? -1 : 1));

const Contacts: React.FC = () => {
  // Select
  const [select, setSelect] = React.useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setSelect(event.target.value as string);
  };

  // Table State
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  // Search State
  const [searchTerm, setSearchTerm] = useState("");

  // Filter rows based on search input. You can search by userName, email, or company.
  const filteredRows = rows.filter(
    (row) =>
      row.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate empty rows for pagination
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - filteredRows.length) : 0;

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
          <form className="t-search-form">
            <label>
              <i className="material-symbols-outlined">search</i>
            </label>
            <input
              type="text"
              className="t-input"
              placeholder="Search here..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setPage(0); // Reset to first page on search
              }}
            />
          </form>

          <Box>
            <FormControl sx={{ minWidth: 115 }} size="small">
              <InputLabel id="demo-select-small">Select</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={select}
                label="select"
                onChange={handleChange}
                className="select"
              >
                <MenuItem value={0}>All</MenuItem>
                <MenuItem value={1}>Active</MenuItem>
                <MenuItem value={2}>Deactivate</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>

        {/* Table */}
        <Box
          sx={{
            marginLeft: "-25px",
            marginRight: "-25px",
          }}
        >
          <TableContainer
            component={Paper}
            sx={{
              boxShadow: "none",
              borderRadius: "0",
            }}
            className="rmui-table"
          >
            <Table sx={{ minWidth: 1000 }} aria-label="Contacts List Table">
              <TableHead className="bg-primary-50">
                <TableRow>
                  <TableCell
                    sx={{
                      fontWeight: "500",
                      padding: "10px 24px",
                      fontSize: "14px",
                    }}
                    className="text-black border-bottom"
                  >
                    #
                  </TableCell>

                  <TableCell
                    sx={{
                      fontWeight: "500",
                      padding: "10px 20px",
                      fontSize: "14px",
                    }}
                    className="text-black border-bottom"
                  >
                    ID
                  </TableCell>

                  <TableCell
                    sx={{
                      fontWeight: "500",
                      padding: "10px 20px",
                      fontSize: "14px",
                    }}
                    className="text-black border-bottom"
                  >
                    User
                  </TableCell>

                  <TableCell
                    sx={{
                      fontWeight: "500",
                      padding: "10px 20px",
                      fontSize: "14px",
                    }}
                    className="text-black border-bottom"
                  >
                    Email
                  </TableCell>

                  <TableCell
                    sx={{
                      fontWeight: "500",
                      padding: "10px 20px",
                      fontSize: "14px",
                    }}
                    className="text-black border-bottom"
                  >
                    Phone
                  </TableCell>

                  <TableCell
                    sx={{
                      fontWeight: "500",
                      padding: "10px 20px",
                      fontSize: "14px",
                    }}
                    className="text-black border-bottom"
                  >
                    Last Contacted
                  </TableCell>

                  <TableCell
                    sx={{
                      fontWeight: "500",
                      padding: "10px 20px",
                      fontSize: "14px",
                    }}
                    className="text-black border-bottom"
                  >
                    Company
                  </TableCell>

                  <TableCell
                    sx={{
                      fontWeight: "500",
                      padding: "10px 20px",
                      fontSize: "14px",
                    }}
                    className="text-black border-bottom"
                  >
                    Lead Score
                  </TableCell>

                  <TableCell
                    sx={{
                      fontWeight: "500",
                      padding: "10px 20px",
                      fontSize: "14px",
                    }}
                    className="text-black border-bottom"
                  >
                    Status
                  </TableCell>

                  <TableCell
                    sx={{
                      fontWeight: "500",
                      padding: "10px 20px",
                      fontSize: "14px",
                    }}
                    className="text-black border-bottom"
                  >
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {(rowsPerPage > 0
                  ? filteredRows.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                  : filteredRows
                ).map((row) => (
                  <TableRow key={row.id}>
                    <TableCell
                      sx={{
                        padding: "5px 13px",
                        fontSize: "14px",
                        width: "65px",
                      }}
                      className="border-bottom"
                    >
                      <Checkbox {...label} sx={{ padding: "8px" }} />
                    </TableCell>

                    <TableCell
                      sx={{
                        padding: "15px 20px",
                        fontSize: "14px",
                      }}
                      className="border-bottom"
                    >
                      {row.id}
                    </TableCell>

                    <TableCell
                      sx={{
                        padding: "15px 20px",
                        fontSize: "14px",
                      }}
                      className="border-bottom"
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
                            src={row.userImg}
                            alt="Product"
                            width={40}
                            height={40}
                            style={{ borderRadius: "100px" }}
                          />
                        </Box>

                        <Box>
                          <Typography
                            sx={{
                              fontSize: "15px",
                              fontWeight: "500",
                            }}
                            className="text-black"
                          >
                            {row.userName}
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>

                    <TableCell
                      sx={{
                        padding: "15px 20px",
                        fontSize: "14px",
                      }}
                      className="border-bottom"
                    >
                      {row.email}
                    </TableCell>

                    <TableCell
                      sx={{
                        padding: "15px 20px",
                        fontSize: "14px",
                      }}
                      className="border-bottom"
                    >
                      {row.phone}
                    </TableCell>

                    <TableCell
                      sx={{
                        padding: "15px 20px",
                        fontSize: "14px",
                      }}
                      className="border-bottom"
                    >
                      {row.lastContacted}
                    </TableCell>

                    <TableCell
                      sx={{
                        padding: "15px 20px",
                        fontSize: "14px",
                      }}
                      className="border-bottom"
                    >
                      {row.company}
                    </TableCell>

                    <TableCell
                      sx={{
                        padding: "15px 20px",
                        fontSize: "14px",
                      }}
                      className="border-bottom"
                    >
                      {row.leadScore}
                    </TableCell>

                    <TableCell
                      sx={{
                        padding: "15px 20px",
                      }}
                      className="border-bottom"
                    >
                      <div className={`trezo-badge ${row.status}`}>
                        {row.status}
                      </div>
                    </TableCell>

                    <TableCell
                      sx={{
                        padding: "15px 20px",
                      }}
                      className="border-bottom"
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <IconButton
                          aria-label="view"
                          color="primary"
                          sx={{ padding: "5px" }}
                        >
                          <i
                            className="material-symbols-outlined"
                            style={{ fontSize: "16px" }}
                          >
                            visibility
                          </i>
                        </IconButton>

                        <IconButton
                          aria-label="edit"
                          color="secondary"
                          sx={{ padding: "5px" }}
                        >
                          <i
                            className="material-symbols-outlined"
                            style={{ fontSize: "16px" }}
                          >
                            edit
                          </i>
                        </IconButton>

                        <IconButton
                          aria-label="delete"
                          color="error"
                          sx={{ padding: "5px" }}
                        >
                          <i
                            className="material-symbols-outlined"
                            style={{ fontSize: "16px" }}
                          >
                            delete
                          </i>
                        </IconButton>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
                {emptyRows > 0 && (
                  <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell className="border-bottom" colSpan={10} />
                  </TableRow>
                )}
              </TableBody>

              <TableFooter>
                <TableRow>
                  <TablePagination
                    rowsPerPageOptions={[
                      5,
                      10,
                      25,
                      { label: "All", value: -1 },
                    ]}
                    colSpan={10}
                    count={filteredRows.length}
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
        </Box>
      </Card>
    </>
  );
};

export default Contacts;
