const __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const express_1 = __importDefault(require('express'));

const app = express_1.default();
app.get('/', function (request, response) {
  return response.json({ message: 'Hello 🚀 !' });
});
app.listen(3333, function () {
  console.log('🚀Server Running');
});
