import authRoute from "./modules/users/user.route";
import servicerouter from "./modules/service/service.route"
import subserviceRoute from "./modules/service/subservice/subservice.route"
import locationRoute from "./modules/location/location.route"
import express from "express";

const allRoute = express.Router({mergeParams: true});


allRoute.use("/users", authRoute);
allRoute.use("/service", servicerouter);
allRoute.use("/subservice", subserviceRoute);
allRoute.use("/location", locationRoute);


export default allRoute;





