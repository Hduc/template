"use client";

import React, { useState, FormEvent } from "react";
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
  InputLabel,
  MenuItem,
  FormControl,
  Dialog,
  DialogTitle,
  Grid,
  Button,
  TextField,
  styled,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Image from "next/image";
import FileUpload from "@/components/Forms/FileUpload";

// Modal
interface BootstrapDialogTitleProps {
  children?: React.ReactNode;
  onClose: () => void;
}

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props: BootstrapDialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};
// End Modal

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
  id: string,
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
    "#854",
    "/images/users/user6.jpg",
    "Oliver Khan",
    "oliver@trezo.com",
    "+1 555-123-4567",
    "19 Jun 2024",
    "ABC Corporation",
    50,
    "active"
  ),
  createData(
    "#853",
    "/images/users/user7.jpg",
    "Carolyn Barnes",
    "carolyn@trezo.com",
    "+1 555-987-6543",
    "18 Jun 2024",
    "XYZ Ltd",
    35,
    "active"
  ),
  createData(
    "#852",
    "/images/users/user8.jpg",
    "Donna Miller",
    "donna@trezo.com",
    "+1 555-456-7890",
    "17 Jun 2024",
    "Tech Solutions",
    40,
    "deactive"
  ),
  createData(
    "#851",
    "/images/users/user9.jpg",
    "Barbara Cros",
    "barbara@trezo.com",
    "+1 555-369-7878",
    "16 Jun 2024",
    "Global Solutions",
    25,
    "active"
  ),
  createData(
    "#850",
    "/images/users/user10.jpg",
    "Rebecca Block",
    "rebecca@trezo.com",
    "+1 555-658-4488",
    "15 Jun 2024",
    "Acma Industries",
    27,
    "deactive"
  ),
  createData(
    "#849",
    "/images/users/user11.jpg",
    "Ramiro McCarty",
    "ramiro@trezo.com",
    "+1 555-558-9966",
    "14 Jun 2024",
    "Synergy Ltd",
    16,
    "active"
  ),
  createData(
    "#848",
    "/images/users/user12.jpg",
    "Robert Fairweather",
    "robert@trezo.com",
    "+1 555-357-5888",
    "13 Jun 2024",
    "Summit Solutions",
    38,
    "active"
  ),
  createData(
    "#847",
    "/images/users/user13.jpg",
    "Marcelino Haddock",
    "marcelino@trezo.com",
    "+1 555-456-8877",
    "12 Jun 2024",
    "Strategies Ltd",
    15,
    "active"
  ),
  createData(
    "#846",
    "/images/users/user14.jpg",
    "Thomas Wilson",
    "thomas@trezo.com",
    "+1 555-622-4488",
    "11 Jun 2024",
    "Tech Enterprises",
    41,
    "deactive"
  ),
  createData(
    "#845",
    "/images/users/user15.jpg",
    "Nathaniel Hulsey",
    "nathaniel@trezo.com",
    "+1 555-225-4488",
    "10 Jun 2024",
    "Synetic Solutions",
    29,
    "deactive"
  ),
  createData(
    "#844",
    "/images/users/user16.jpg",
    "Jake Khan",
    "jake@trezo.com",
    "+1 555-123-4567",
    "19 Jun 2024",
    "ABC Corporation",
    55,
    "active"
  ),
  createData(
    "#843",
    "/images/users/user17.jpg",
    "Noah Barnes",
    "noah@trezo.com",
    "+1 555-987-6543",
    "18 Jun 2024",
    "XYZ Ltd",
    135,
    "active"
  ),
  createData(
    "#842",
    "/images/users/user18.jpg",
    "James Miller",
    "james@trezo.com",
    "+1 555-456-7890",
    "17 Jun 2024",
    "Tech Solutions",
    45,
    "deactive"
  ),
  createData(
    "#841",
    "/images/users/user19.jpg",
    "Connor Cros",
    "connor@trezo.com",
    "+1 555-369-7878",
    "16 Jun 2024",
    "Global Solutions",
    29,
    "active"
  ),
  createData(
    "#840",
    "/images/users/user20.jpg",
    "Liam Block",
    "liam@trezo.com",
    "+1 555-658-4488",
    "15 Jun 2024",
    "Acma Industries",
    56,
    "deactive"
  ),
  createData(
    "#839",
    "/images/users/user21.jpg",
    "Harry McCarty",
    "harry@trezo.com",
    "+1 555-558-9966",
    "14 Jun 2024",
    "Synergy Ltd",
    16,
    "active"
  ),
  createData(
    "#838",
    "/images/users/user22.jpg",
    "Harry Fairweather",
    "harry@trezo.com",
    "+1 555-357-5888",
    "13 Jun 2024",
    "Summit Solutions",
    38,
    "active"
  ),
  createData(
    "#837",
    "/images/users/user23.jpg",
    "Jacob Haddock",
    "jacob@trezo.com",
    "+1 555-456-8877",
    "12 Jun 2024",
    "Strategies Ltd",
    15,
    "active"
  ),
  createData(
    "#836",
    "/images/users/user24.jpg",
    "Jacob Wilson",
    "jacob@trezo.com",
    "+1 555-622-4488",
    "11 Jun 2024",
    "Tech Enterprises",
    41,
    "deactive"
  ),
  createData(
    "#835",
    "/images/users/user25.jpg",
    "Michael Hulsey",
    "michael@trezo.com",
    "+1 555-225-4488",
    "10 Jun 2024",
    "Synetic Solutions",
    29,
    "deactive"
  ),
].sort((b, a) => (a.id < b.id ? -1 : 1));

const ContactsTable: React.FC = () => {
  // Table
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");

  // Handle Page Change
  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: React.ChangeEvent<HTMLInputElement>["target"]["valueAsNumber"]
  ) => {
    setPage(newPage);
  };

  // Handle Rows per Page Change
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Filtered rows based on search query
  const filteredRows = rows.filter((row) =>
    Object.values(row).some((value) =>
      value.toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  // Modal
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // const data = new FormData(event.currentTarget);
    // console.log();
  };

  // Select
  const [company, setCompany] = useState("");
  const handleChangeCompany = (event: SelectChangeEvent) => {
    setCompany(event.target.value as string);
  };

  const [status, setStatus] = useState("");
  const handleChangeStatus = (event: SelectChangeEvent) => {
    setStatus(event.target.value as string);
  };

  // File Upload
  const handleFileSelect = (files: FileList) => {
    console.log("Selected files:", files);
    // Process your files here
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
          <Box
            component="form"
            className="t-search-form"
            sx={{
              width: { sm: "265px" },
            }}
          >
            <label>
              <i className="material-symbols-outlined">search</i>
            </label>
            <input
              type="text"
              className="t-input"
              placeholder="Search here..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Box>

          <Button
            onClick={handleClickOpen}
            variant="outlined"
            sx={{
              textTransform: "capitalize",
              borderRadius: "7px",
              fontWeight: "500",
              fontSize: "13px",
              padding: "6px 13px",
            }}
            color="primary"
          >
            <AddIcon sx={{ position: "relative", top: "-1px" }} /> Add New
            Contact
          </Button>
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
            <Table sx={{ minWidth: 1350 }} aria-label="Table">
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
                              fontSize: { xs: "14px", lg: "15px" },
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
                      className="text-black border-bottom"
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
                      <Box
                        className={`trezo-badge ${row.status}`}
                        sx={{ textTransform: "capitalize" }}
                      >
                        {row.status}
                      </Box>
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
                {filteredRows.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={10} align="center">
                      No matching results found
                    </TableCell>
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

      {/* Modal */}
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        className="rmu-modal"
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              background: "#f6f7f9",
              padding: { xs: "15px 20px", md: "25px" },
            }}
            className="rmu-modal-header"
          >
            <Typography
              id="modal-modal-title"
              variant="h6"
              sx={{
                fontWeight: "600",
                fontSize: { xs: "16px", md: "18px" },
              }}
              className="text-black"
            >
              Add New Contact
            </Typography>

            <IconButton aria-label="remove" size="small" onClick={handleClose}>
              <ClearIcon />
            </IconButton>
          </Box>

          <Box className="rmu-modal-content">
            <Box component="form" noValidate onSubmit={handleSubmit}>
              <Box
                sx={{
                  padding: "25px",
                  borderRadius: "8px",
                }}
                className="bg-white"
              >
                <Grid container alignItems="center" spacing={2}>
                  <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
                    <Typography
                      component="h5"
                      sx={{
                        fontWeight: "500",
                        fontSize: "14px",
                        mb: "12px",
                      }}
                      className="text-black"
                    >
                      Name
                    </Typography>

                    <TextField
                      autoComplete="name"
                      name="name"
                      required
                      fullWidth
                      id="name"
                      label="Enter name"
                      autoFocus
                      InputProps={{
                        style: { borderRadius: 8 },
                      }}
                    />
                  </Grid>

                  <Grid size={{ xs: 12, sm: 12, md: 12, lg: 6 }}>
                    <Typography
                      component="h5"
                      sx={{
                        fontWeight: "500",
                        fontSize: "14px",
                        mb: "12px",
                      }}
                      className="text-black"
                    >
                      Email
                    </Typography>

                    <TextField
                      autoComplete="email"
                      name="email"
                      required
                      fullWidth
                      id="email"
                      label="Enter email address"
                      autoFocus
                      InputProps={{
                        style: { borderRadius: 8 },
                      }}
                    />
                  </Grid>

                  <Grid size={{ xs: 12, sm: 12, md: 12, lg: 6 }}>
                    <Typography
                      component="h5"
                      sx={{
                        fontWeight: "500",
                        fontSize: "14px",
                        mb: "12px",
                      }}
                      className="text-black"
                    >
                      Phone
                    </Typography>

                    <TextField
                      autoComplete="phone"
                      name="phone"
                      required
                      fullWidth
                      id="phone"
                      label="Enter phone number"
                      autoFocus
                      InputProps={{
                        style: { borderRadius: 8 },
                      }}
                    />
                  </Grid>

                  <Grid size={{ xs: 12, sm: 12, md: 12, lg: 6 }}>
                    <Typography
                      component="h5"
                      sx={{
                        fontWeight: "500",
                        fontSize: "14px",
                        mb: "12px",
                      }}
                      className="text-black"
                    >
                      Company
                    </Typography>

                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Select
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={company}
                        label="Select"
                        onChange={handleChangeCompany}
                      >
                        <MenuItem value={0}>ABC Corporation</MenuItem>
                        <MenuItem value={1}>XYZ Ltd</MenuItem>
                        <MenuItem value={2}>Tech Solutions</MenuItem>
                        <MenuItem value={3}>Global Solutions</MenuItem>
                        <MenuItem value={4}>Acma Industries</MenuItem>
                        <MenuItem value={5}>Synergy Ltd</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid size={{ xs: 12, sm: 12, md: 12, lg: 6 }}>
                    <Typography
                      component="h5"
                      sx={{
                        fontWeight: "500",
                        fontSize: "14px",
                        mb: "12px",
                      }}
                      className="text-black"
                    >
                      Status
                    </Typography>

                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Select
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={status}
                        label="Select"
                        onChange={handleChangeStatus}
                      >
                        <MenuItem value={0}>Active</MenuItem>
                        <MenuItem value={1}>Deactive</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
                    <Typography
                      component="h5"
                      sx={{
                        fontWeight: "500",
                        fontSize: "14px",
                        mb: "12px",
                      }}
                      className="text-black"
                    >
                      Image
                    </Typography>

                    <FileUpload onFileSelect={handleFileSelect} />
                  </Grid>

                  <Grid size={{ xs: 12 }} mt={1}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "end",
                        gap: "15px",
                      }}
                    >
                      <Button
                        onClick={handleClose}
                        variant="contained"
                        color="error"
                        sx={{
                          textTransform: "capitalize",
                          borderRadius: "8px",
                          fontWeight: "500",
                          fontSize: "13px",
                          padding: "11px 30px",
                          color: "#fff !important",
                        }}
                      >
                        Cancel
                      </Button>

                      <Button
                        type="submit"
                        variant="contained"
                        sx={{
                          textTransform: "capitalize",
                          borderRadius: "8px",
                          fontWeight: "500",
                          fontSize: "13px",
                          padding: "11px 30px",
                          color: "#fff !important",
                        }}
                      >
                        <AddIcon
                          sx={{
                            position: "relative",
                            top: "-2px",
                          }}
                          className="mr-5px"
                        />{" "}
                        Create
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Box>
        </Box>
      </BootstrapDialog>
    </>
  );
};

export default ContactsTable;
