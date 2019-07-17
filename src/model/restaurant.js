import mongoose from 'mongoose';
import { builtinModules } from 'module';
let Schema = mongoose.Schema;

let restaurantSchema = new Schema({
  name: String
});

module.exports = mongoose.model('Restaurant', restaurantSchema);
