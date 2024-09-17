import Feature from "./components/features";
import FeatureCards from "./components/FeatureCards";
import  { forwardRef } from 'react';


const FeaturePage=forwardRef((props, ref) => {
    return(
        <div ref={ref} className="flex flex-col gap-10">
            <div>
                <Feature />
            </div>
            <div>
                <FeatureCards />
            </div>

        </div>
    )
})
export default FeaturePage;