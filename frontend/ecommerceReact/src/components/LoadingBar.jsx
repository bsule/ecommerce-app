import React, { useState, useEffect } from 'react';
import LoadingBar from 'react-top-loading-bar';

const LoadingBarComponent = ({ isLoading }) => {
  const [progress, setProgress] = useState(0);

    useEffect(() => {
        let interval;
        if (isLoading) {
            interval = setInterval(() => {
                setProgress((prevProgress) => {
                    if (prevProgress >= 100) {
                        clearInterval(interval);
                        return 0;
                    } 
                    else {
                        if(prevProgress === 90) {
                            return prevProgress;
                        }
                        return prevProgress + 10;
                    }
                });
            }, 300);
        }
        else {
            setProgress(100);
        }
        return () => clearInterval(interval);
    }, [isLoading]);

    return (
        <div>
        <LoadingBar
            color='#007bff'
            progress={progress}
            onLoaderFinished={() => setProgress(0)}
            waitingTime='500'
        />
        </div>
    );
};

export default LoadingBarComponent;