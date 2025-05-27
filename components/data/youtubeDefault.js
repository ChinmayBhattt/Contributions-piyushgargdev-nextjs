import React from 'react';

// Using the YouTube API response data from your file
const getYoutubeVideosDefaultResponse = {
  kind: "youtube#searchListResponse",
  etag: "Rw3ulmyKVKn2fcQJ6cUixEmCuSk",
  nextPageToken: "CAUQAA",
  regionCode: "IN",
  pageInfo: {
    totalResults: 136,
    resultsPerPage: 5,
  },
  items: [
    {
      kind: "youtube#searchResult",
      etag: "usHPIcWGObXhF0Tqm1s1vAbUMwk",
      id: {
        kind: "youtube#video",
        videoId: "7cxpYJAElr4",
      },
      snippet: {
        publishedAt: "2022-09-30T06:30:02Z",
        channelId: "UCf9T51_FmMlfhiGpoes0yFA",
        title: "React Video Chat App | WebRTC Video Chat Zoom Clone",
        description:
          "Hey Everyone, My name is Piyush and in this video, we will create a video call application using React and WebRTC. WebRTC ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/7cxpYJAElr4/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/7cxpYJAElr4/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/7cxpYJAElr4/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Piyush Garg",
        liveBroadcastContent: "none",
        publishTime: "2022-09-30T06:30:02Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "M0tSW2LxC_Z6rj0ZYJInW8OzJpo",
      id: {
        kind: "youtube#playlist",
        playlistId: "PLinedj3B30sCw8Qjrct1DRglx4hWQx83C",
      },
      snippet: {
        publishedAt: "2022-06-26T10:30:16Z",
        channelId: "UCf9T51_FmMlfhiGpoes0yFA",
        title: "Firebase with Reactjs | Complete Firebase in Hindi",
        description: "",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/-d5OHgw34g4/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/-d5OHgw34g4/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/-d5OHgw34g4/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Piyush Garg",
        liveBroadcastContent: "none",
        publishTime: "2022-06-26T10:30:16Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "H00RTO4k9dLN7VxUQ3nfjFb1jMs",
      id: {
        kind: "youtube#playlist",
        playlistId: "PLinedj3B30sCHqHtgbjg1lSYgWebm1dyI",
      },
      snippet: {
        publishedAt: "2022-06-19T16:25:37Z",
        channelId: "UCf9T51_FmMlfhiGpoes0yFA",
        title: "Complete React Tutorial Series in Hindi | Reactjs",
        description:
          "Hello Everyone, I am Piyush and in this series, we would be learning complete Reactjs with projects. We will also learn API calling ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/Eqj7xSKiTlo/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/Eqj7xSKiTlo/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/Eqj7xSKiTlo/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Piyush Garg",
        liveBroadcastContent: "none",
        publishTime: "2022-06-19T16:25:37Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "nTHsuSDX2Ll8oiM7oV9K_BArao0",
      id: {
        kind: "youtube#video",
        videoId: "pw2krTJLF6Y",
      },
      snippet: {
        publishedAt: "2022-06-21T17:42:30Z",
        channelId: "UCf9T51_FmMlfhiGpoes0yFA",
        title:
          "Building Tic Tac Toe in ReactJS | React Tutorial Series | Complete React Tutorial Series in Hindi",
        description:
          "Hey everyone, I am Piyush Garg and I am going to start my youtube journey with react series. In this series, we are going to learn ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/pw2krTJLF6Y/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/pw2krTJLF6Y/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/pw2krTJLF6Y/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Piyush Garg",
        liveBroadcastContent: "none",
        publishTime: "2022-06-21T17:42:30Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "FCDva4u4EVzSY3XjFguliw3snOc",
      id: {
        kind: "youtube#video",
        videoId: "73Tz6qTgNuU",
      },
      snippet: {
        publishedAt: "2022-06-25T11:30:01Z",
        channelId: "UCf9T51_FmMlfhiGpoes0yFA",
        title:
          "React Context API in One Video | ReactJS | ReactJS Tutorial In Hindi",
        description:
          "Hello Everyone, In this video, we are going to see step by step guide on how to use React Context API. We would also understand ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/73Tz6qTgNuU/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/73Tz6qTgNuU/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/73Tz6qTgNuU/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Piyush Garg",
        liveBroadcastContent: "none",
        publishTime: "2022-06-25T11:30:01Z",
      },
    },
  ],
};

const getYoutubeChannelDataDefaultResponse = {
  kind: "youtube#channelListResponse",
  etag: "HahajDFWeEWloCDbYPN7Q2CUy2s",
  pageInfo: {
    totalResults: 1,
    resultsPerPage: 5,
  },
  items: [
    {
      kind: "youtube#channel",
      etag: "7VXozDeztPxlh-aW2fYVN7bcPxQ",
      id: "UCf9T51_FmMlfhiGpoes0yFA",
      statistics: {
        viewCount: "39669",
        subscriberCount: "1010",
        hiddenSubscriberCount: false,
        videoCount: "114",
      },
    },
  ],
};

const VideoCard = ({ video }) => {
  const handleVideoClick = () => {
    const videoId = video.id?.videoId;
    const playlistId = video.id?.playlistId;
    
    if (videoId) {
      window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
    } else if (playlistId) {
      window.open(`https://www.youtube.com/playlist?list=${playlistId}`, '_blank');
    }
  };

  const getThumbnailUrl = () => {
    // Use medium quality thumbnail for better display
    return video.snippet.thumbnails?.medium?.url || 
           video.snippet.thumbnails?.high?.url || 
           video.snippet.thumbnails?.default?.url;
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div 
      className="bg-gray-900 rounded-lg overflow-hidden cursor-pointer hover:bg-gray-800 transition-colors duration-200 group"
      onClick={handleVideoClick}
    >
      <div className="relative">
        <img
          src={getThumbnailUrl()}
          alt={video.snippet.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
          onError={(e) => {
            e.target.src = "/api/placeholder/320/180";
          }}
        />
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-2 py-1 rounded">
          {video.id?.kind === "youtube#video" ? "VIDEO" : "PLAYLIST"}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-white font-semibold text-sm mb-2 line-clamp-2 leading-tight">
          {video.snippet.title}
        </h3>
        <p className="text-gray-400 text-xs mb-2 line-clamp-2">
          {video.snippet.description}
        </p>
        <div className="flex justify-between items-center text-xs text-gray-500">
          <span>{video.snippet.channelTitle}</span>
          <span>{formatDate(video.snippet.publishedAt)}</span>
        </div>
      </div>
    </div>
  );
};

const LatestYouTubeVideos = () => {
  const channelStats = getYoutubeChannelDataDefaultResponse.items[0].statistics;
  const videos = getYoutubeVideosDefaultResponse.items;

  return (
    <div className="bg-black text-white p-8 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Latest YouTube Videos</h1>
          <div className="flex justify-center items-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <span className="text-blue-400">👥</span>
              <span>{parseInt(channelStats.subscriberCount).toLocaleString()} subscribers</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-400">📹</span>
              <span>{channelStats.videoCount} videos</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <VideoCard key={video.etag || index} video={video} />
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
            View More Videos
          </button>
        </div>
      </div>
    </div>
  );
};

export default LatestYouTubeVideos;