"use client";

import React, { useState, useRef } from "react";
import { Card, Table, Dropdown } from "react-bootstrap";

const audioData = [
  {
    id: 1,
    title: "Mastering Digital Marketing",
    author: "Sarah Johnson",
    listens: "8,200",
    image: "/images/played-1.jpg",
    audioSrc: "https://cldup.com/qR72ozoaiQ.mp3",
    played: "40 min. ago",
    duration: "45:30",
  },
  {
    id: 2,
    title: "Content Marketing Essentials",
    author: "Tom Richards",
    listens: "9,500",
    image: "/images/played-2.jpg",
    audioSrc: "https://cldup.com/qR72ozoaiQ.mp3",
    played: "1 h. ago",
    duration: "25:50",
  },
  {
    id: 3,
    title: "Social Media Trends for 2024",
    author: "David Chen",
    listens: "7,400",
    image: "/images/played-3.jpg",
    audioSrc: "https://cldup.com/qR72ozoaiQ.mp3",
    played: "1 day ago",
    duration: "30:20",
  },
  {
    id: 4,
    title: "Building Brand Loyalty",
    author: "Michael Young",
    listens: "10,200",
    image: "/images/played-4.jpg",
    audioSrc: "https://cldup.com/qR72ozoaiQ.mp3",
    played: "2 days ago",
    duration: "15:35",
  },
  {
    id: 5,
    title: "Content Creation Techniques",
    author: "Lisa Kim",
    listens: "9,300",
    image: "/images/played-5.jpg",
    audioSrc: "https://cldup.com/qR72ozoaiQ.mp3",
    played: "3 days ago",
    duration: "18:45",
  },
  {
    id: 6,
    title: "The Future of AI in Marketing",
    author: "Tom Richards",
    listens: "6,300",
    image: "/images/played-6.jpg",
    audioSrc: "https://cldup.com/qR72ozoaiQ.mp3",
    played: "4 days ago",
    duration: "22:15",
  },
];

const RecentlyPlayed = () => {
  const [playingTrack, setPlayingTrack] = useState(null);
  const [favorites, setFavorites] = useState({});
  const audioRefs = useRef({});

  // Toggle play/pause for tracks
  const handlePlayPause = (id, audioSrc) => {
    if (playingTrack !== null && playingTrack !== id) {
      audioRefs.current[playingTrack]?.pause();
    }

    if (!audioRefs.current[id]) {
      audioRefs.current[id] = new Audio(audioSrc);
    }

    if (playingTrack === id) {
      audioRefs.current[id].pause();
      setPlayingTrack(null);
    } else {
      audioRefs.current[id].play();
      setPlayingTrack(id);
    }
  };

  // Toggle favorite (like/unlike)
  const toggleFavorite = (id) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [id]: !prevFavorites[id], // Toggle state
    }));
  };

  return (
    <>
      <Card
        className="custom-shadow rounded-3 bg-white border mb-4"
        style={{
          paddingBottom: "16px",
        }}
      >
        <div
          className="d-flex justify-content-between align-items-center flex-wrap gap-3 custom-padding-30 position-relative pb-3"
          style={{
            top: "-5px",
          }}
        >
          <h3 className="mb-0 fs-18 fw-semibold">Recently Played</h3>
          <button
            className="bg-transparent border-0 p-0 d-flex align-items-center text-decoration-none position-relative right-for-rtl text-body"
            style={{
              right: "-8px",
            }}
          >
            <span>View All</span>
            <i className="ri-arrow-right-s-line fs-24 position-relative top-1 lh-1 text-body"></i>
          </button>
        </div>

        <div className="default-table-area style-three recently-played">
          <div className="table-responsive">
            <Table className="align-middle border-0">
              <tbody>
                {audioData.map((track) => (
                  <tr key={track.id}>
                    <td>
                      <div className="d-flex">
                        <button
                          className="p-0 border-0 bg-transparent me-3"
                          onClick={() =>
                            handlePlayPause(track.id, track.audioSrc)
                          }
                        >
                          {playingTrack === track.id ? (
                            <i
                              className="ri-pause-large-fill text-primary"
                              style={{ fontSize: "24px" }}
                            ></i>
                          ) : (
                            <i
                              className="ri-play-large-fill text-primary"
                              style={{ fontSize: "24px" }}
                            ></i>
                          )}
                        </button>

                        <div className="d-flex align-items-center gap-2">
                          <div className="flex-shrink-0">
                            <img
                              src={track.image}
                              className="rounded-1"
                              alt="played"
                              width={34}
                              height={34}
                            />
                          </div>
                          <div className="flex-grow-1 ms-10">
                            <h4 className="fs-14 fw-medium mb-0">
                              {track.title}
                            </h4>
                            <span className="fs-12 text-body fw-normal">
                              {track.author}
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>

                    <td>
                      <span className="d-block fs-14 fw-normal text-body">
                        Played {track.played}
                      </span>
                    </td>

                    <td>
                      <div className="d-flex align-items-center gap-2">
                        <i className="ri-customer-service-line text-primary fs-18"></i>
                        <span className="d-block fs-14 fw-normal text-body ms-10">
                          {track.listens}
                        </span>
                      </div>
                    </td>

                    <td>
                      <button
                        className="favorite-button border-0 text-body-color-60 fs-14 bg-transparent p-0"
                        onClick={() => toggleFavorite(track.id)}
                      >
                        {favorites[track.id] ? (
                          <i className="ri-heart-fill fs-20 text-primary"></i>
                        ) : (
                          <i className="ri-heart-line fs-20 text-body"></i>
                        )}
                      </button>
                    </td>
                    <td>
                      <span className="text-body">{track.duration}</span>
                    </td>
                    <td>
                      <Dropdown className="action-opt">
                        <Dropdown.Toggle
                          variant="secondary"
                          id="dropdown-basic"
                          className="bg-transparent p-0"
                        >
                          <i className="material-symbols-outlined">
                            more_horiz
                          </i>
                        </Dropdown.Toggle>

                        <Dropdown.Menu className="bg-white border box-shadow">
                          <Dropdown.Item href="#">
                            <i className="material-symbols-outlined">add</i>
                            Add To Playlist
                          </Dropdown.Item>
                          <Dropdown.Item href="#">
                            <i className="material-symbols-outlined">
                              description
                            </i>
                            Go To Album
                          </Dropdown.Item>

                          <Dropdown.Item href="#">
                            <i className="material-symbols-outlined">
                              volume_up
                            </i>
                            View Credits
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </Card>
    </>
  );
};

export default RecentlyPlayed;
