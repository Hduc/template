"use client";

import { Row, Col, Button } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import FilterForm from "./FilterForm";

const nftData = [
  {
    id: 35246,
    title: "Christmas Eve",
    creatorDetails: "/creators/details/",
    imgSrc: "/images/nft-10.png",
    creatorImg: "/images/user-76.gif",
    highestBid: "9.75 ETH",
    currentBid: "5.50 ETH",
    rating: 9.2,
    nftDetails: "/nft/details/",
  },
  {
    id: 35247,
    title: "Humming Bird",
    creatorDetails: "/creators/details/",
    imgSrc: "/images/nft-11.png",
    creatorImg: "/images/user-77.gif",
    highestBid: "10.75 ETH",
    currentBid: "12.50 ETH",
    rating: 9.5,
    nftDetails: "/nft/details/",
  },
  {
    id: 35248,
    title: "Naughty Pool",
    creatorDetails: "/creators/details/",
    imgSrc: "/images/nft-12.png",
    creatorImg: "/images/user-76.gif",
    highestBid: "17.75 ETH",
    currentBid: "20.50 ETH",
    rating: 9.3,
    nftDetails: "/nft/details/",
  },
  {
    id: 35249,
    title: "Hello Thumbs",
    creatorDetails: "/creators/details/",
    imgSrc: "/images/nft-13.png",
    creatorImg: "/images/user-78.gif",
    highestBid: "9.75 ETH",
    currentBid: "10.50 ETH",
    rating: 9.7,
    nftDetails: "/nft/details/",
  },
  {
    id: 352450,
    title: "Pixel Watermmelon",
    creatorDetails: "/creators/details/",
    imgSrc: "/images/nft-14.png",
    creatorImg: "/images/user-77.gif",
    highestBid: "10.75 ETH",
    currentBid: "12.50 ETH",
    rating: 9.5,
    nftDetails: "/nft/details/",
  },
  {
    id: 35251,
    title: "BDancing Cookies",
    creatorDetails: "/creators/details/",
    imgSrc: "/images/nft-3.gif",
    creatorImg: "/images/user-76.gif",
    highestBid: "17.75 ETH",
    currentBid: "20.50 ETH",
    rating: 9.3,
    nftDetails: "/nft/details/",
  },
  {
    id: 35252,
    title: "Rotating Flower",
    creatorDetails: "/creators/details/",
    imgSrc: "/images/nft-15.png",
    creatorImg: "/images/user-76.gif",
    highestBid: "3.95 ETH",
    currentBid: "6.50 ETH",
    rating: 9.7,
    nftDetails: "/nft/details/",
  },
  {
    id: 35253,
    title: "Flying Bulb",
    creatorDetails: "/creators/details/",
    imgSrc: "/images/nft-16.png",
    creatorImg: "/images/user-76.gif",
    highestBid: "8.75 ETH",
    currentBid: "9.50 ETH",
    rating: 9.7,
    nftDetails: "/nft/details/",
  },
  {
    id: 35258,
    title: "Humming Bird",
    creatorDetails: "/creators/details/",
    imgSrc: "/images/nft-11.png",
    creatorImg: "/images/user-77.gif",
    highestBid: "10.75 ETH",
    currentBid: "12.50 ETH",
    rating: 9.5,
    nftDetails: "/nft/details/",
  },
  {
    id: 35259,
    title: "Christmas Eve",
    creatorDetails: "/creators/details/",
    imgSrc: "/images/nft-10.png",
    creatorImg: "/images/user-76.gif",
    highestBid: "9.75 ETH",
    currentBid: "5.50 ETH",
    rating: 9.2,
    nftDetails: "/nft/details/",
  },
  {
    id: 35260,
    title: "Hello Thumbs",
    creatorDetails: "/creators/details/",
    imgSrc: "/images/nft-13.png",
    creatorImg: "/images/user-78.gif",
    highestBid: "9.75 ETH",
    currentBid: "10.50 ETH",
    rating: 9.7,
    nftDetails: "/nft/details/",
  },
  {
    id: 35261,
    title: "Naughty Pool",
    creatorDetails: "/creators/details/",
    imgSrc: "/images/nft-12.png",
    creatorImg: "/images/user-76.gif",
    highestBid: "17.75 ETH",
    currentBid: "20.50 ETH",
    rating: 9.3,
    nftDetails: "/nft/details/",
  },
];

const NftArtworks = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8; // Number of items per page

  // Calculate total pages
  const totalPages = Math.ceil(nftData.length / pageSize);

  // Calculate data for current page
  const currentData = nftData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  // Handler for the previous button
  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  // Handler for the next button
  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <>
      {/* FilterForm */}
      <FilterForm />
      
      <Row className="justify-content-center">
        {currentData.map((nft) => (
          <Col sm={6} lg={4} xxl={3} key={nft.id}>
            <div className="bg-white rounded-3 border-0 p-3 place-bid for-dark-card mb-4">
              <Link
                href={nft.nftDetails}
                className="d-block mb-3 text-decoration-none position-relative"
              >
                <Image
                  src={nft.imgSrc}
                  className="rounded-3"
                  alt="nft"
                  width={560}
                  height={414}
                />
                <span className="btn btn-primary py-2 px-3 d-inline-block fs-16 fw-medium position-absolute top-50 start-50 translate-middle opacity-0">
                  Place Bid
                </span>
              </Link>

              <div className="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3">
                <Link
                  href={nft.creatorDetails}
                  className="d-flex align-items-center text-decoration-none"
                >
                  <div className="flex-shrink-0">
                    <Image
                      src={nft.creatorImg}
                      className="rounded-circle"
                      width={27}
                      height={27}
                      alt="user"
                    />
                  </div>
                  <div className="flex-grow-1 ms-2">
                    <span className="fs-12">NFT ID: {nft.id}</span>
                    <h4 className="fw-semibold fs-14 mb-0">{nft.title}</h4>
                  </div>
                </Link>
                <Image
                  src="/images/verify.svg"
                  className="cursor"
                  alt="verify"
                  width={20}
                  height={20}
                />
              </div>

              <div className="d-flex justify-content-between align-items-center">
                <Link
                  href={nft.nftDetails}
                  className="d-flex align-items-center text-decoration-none"
                >
                  <div className="flex-grow-1">
                    <span className="fs-12 d-block mb-1">
                      Highest Bid:{" "}
                      <span className="fw-semibold text-secondary">
                        {nft.highestBid}
                      </span>
                    </span>
                    <h4 className="fw-semibold fs-14 mb-0">{nft.currentBid}</h4>
                  </div>
                </Link>
                <button className="bg-transparent p-0 border-0">
                  <i
                    className="ri-heart-fill fs-20 position-relative top-2"
                    style={{ color: "#EE3E08" }}
                  ></i>{" "}
                  <span className="text-secondary fs-12 fw-semibold">
                    {nft.rating}
                    <span className="text-body">/10</span>
                  </span>
                </button>
              </div>
            </div>
          </Col>
        ))}
      </Row>

      <div className="d-flex justify-content-center justify-content-sm-between align-items-center text-center flex-wrap gap-2 showing-wrap mb-4">
        <span className="fs-12 fw-medium">
          Showing {Math.min(pageSize * currentPage, nftData.length)} of{" "}
          {nftData.length} Results
        </span>

        <nav aria-label="Page navigation example">
          <ul className="pagination mb-0 justify-content-center">
            <li className="page-item">
              <Button
                className="page-link icon"
                onClick={handlePrevious}
                disabled={currentPage === 1}
              >
                <i className="material-symbols-outlined">keyboard_arrow_left</i>
              </Button>
            </li>
            <li className="page-item">
              <Button
                className="page-link icon"
                onClick={handleNext}
                disabled={currentPage === totalPages}
              >
                <i className="material-symbols-outlined">
                  keyboard_arrow_right
                </i>
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default NftArtworks;
