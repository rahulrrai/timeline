import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import StarIcon from '@material-ui/icons/Star';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import FavoriteIcon from '@material-ui/icons/Favorite';
import 'react-vertical-timeline-component/style.min.css';
import React from 'react';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import { CardMedia } from '@material-ui/core';
import ImgMediaCard from './Card'

export default function Timeline() {

  return (
    <VerticalTimeline>

    <VerticalTimelineElement
      iconStyle={{ background: '#EA4963', color: '#fff' }}
      icon={<StarIcon />}
    />
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2010 - 2011"
    iconStyle={{ background: '#EA4963', color: '#fff' }}
    icon={<FavoriteIcon />}
  >
  <ImgMediaCard />


  <div>
    <label>
    </label>
    </div>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2008 - 2010"
    iconStyle={{ background: '#EA4963', color: '#fff' }}
    icon={<FavoriteIcon />}
  >
  <ImgMediaCard />
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2008 - 2010"
    iconStyle={{ background: '#EA4963', color: '#fff' }}
    icon={<FavoriteIcon />}
  >
  <ImgMediaCard />
  </VerticalTimelineElement>
  <VerticalTimelineElement
    iconStyle={{ background: '#EA4963', color: '#fff' }}
    icon={<IndeterminateCheckBoxIcon />}
  />

</VerticalTimeline>
  )

}
