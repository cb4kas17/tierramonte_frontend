import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SectionPageContainer from '../../../components/PrincipalPageComponent/SectionPageContainer';
function SectionPage() {
      const [section, setSection] = useState([]);
      const getSections = async () => {
            try {
                  const response = await axios.get(
                        'http://localhost:4000/api/principal/sections',
                        { withCredentials: true }
                  );
                  setSection(response.data.sections);
            } catch (error) {
                  console.log(error);
            }
      };
      useEffect(() => {
            getSections();
      }, []);
      return (
            <div>
                  <SectionPageContainer data={section} />
            </div>
      );
}

export default SectionPage;
