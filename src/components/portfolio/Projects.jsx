import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { projectsData } from './Data';
import { projectsNav } from './Data';
import PortfolioItems from './PortfolioItems';

const Projects = () => {
    const [item, setItem] = useState({ name: 'all' });
    const [projects, setProjects] = useState(projectsData);
 

  return (
    <div>
        <div className="work_container container grid">
            {projects.map((item) => {
                return (
                    <PortfolioItems item={item} key={item.id} />
                )
            })}
        </div>
    </div>
  );
};

export default Projects;
