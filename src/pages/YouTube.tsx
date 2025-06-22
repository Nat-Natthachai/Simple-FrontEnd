import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material';
import { SvgDimension } from '../widgets/SvgDimension';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faThumbsUp, faComment, faShare } from '@fortawesome/free-solid-svg-icons';

// ตัวอย่างข้อมูลวิดีโอ
const videos = [
  {
    id: 1,
    title: 'วิดีโอตัวอย่าง 1',
    thumbnail: 'https://picsum.photos/320/180',
    views: '1.2M',
    likes: '45K',
    comments: '2.3K',
    shares: '1.5K',
  },
  {
    id: 2,
    title: 'วิดีโอตัวอย่าง 2',
    thumbnail: 'https://picsum.photos/320/180',
    views: '800K',
    likes: '30K',
    comments: '1.8K',
    shares: '900',
  },
  // เพิ่มวิดีโออื่นๆ ตามต้องการ
];

export const YouTube: React.FC = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ mb: 4, display: 'flex', alignItems: 'center', gap: 2 }}>
        <SvgDimension width={40} height={40}>
          <FontAwesomeIcon icon={faPlay} color="red" size="2x" />
        </SvgDimension>
        <Typography variant="h4" component="h1">
          YouTube
        </Typography>
      </Box>

      <Box sx={{ 
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)'
        },
        gap: 3
      }}>
        {videos.map((video) => (
          <Box key={video.id}>
            <Card>
              <CardMedia
                component="img"
                height="180"
                image={video.thumbnail}
                alt={video.title}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {video.title}
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <SvgDimension width={20} height={20}>
                      <FontAwesomeIcon icon={faThumbsUp} />
                    </SvgDimension>
                    <Typography variant="body2">{video.likes}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <SvgDimension width={20} height={20}>
                      <FontAwesomeIcon icon={faComment} />
                    </SvgDimension>
                    <Typography variant="body2">{video.comments}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <SvgDimension width={20} height={20}>
                      <FontAwesomeIcon icon={faShare} />
                    </SvgDimension>
                    <Typography variant="body2">{video.shares}</Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </Box>
  );
}; 