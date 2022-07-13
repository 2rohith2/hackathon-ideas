import React, { useEffect, useState } from 'react';
import HackathonsComponent from '../components/Hackathons';

export interface HackathonIdea {
  id: string;
  createdAt: string;
  description: string;
  dislikeCount: number;
  likeCount: number;
  tags: string[];
  title: string;
  userName: string;
  userPhoto: string;
}

export default function HackathonsContainer(): JSX.Element {
  const [hackIdeas, setHackIdeas] = useState<HackathonIdea[]>([]);
  const API_URL = 'http://localhost:3000/ideas.json';

  useEffect(() => {
    (async function getAllHackthons(): Promise<void> {
      try {
        const response = await (await fetch(API_URL)).json();
        setHackIdeas(response);
      } catch (error) {
        console.log('unable to fetch the data');
      }
    })();
  }, []);

  return (
    <>
      <HackathonsComponent hackIdeas={hackIdeas} />
    </>
  );
}