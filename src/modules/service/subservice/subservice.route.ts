import SubserviceController from "./subservice.controllers";
import express from "express";

const subserviceRoute = express.Router({mergeParams: true});

subserviceRoute.post("/createsub", SubserviceController.createSubservice);
subserviceRoute.get("/getsub/:parentId", SubserviceController.getSubservicesByParentId);




export default subserviceRoute