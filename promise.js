const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme


const promiseOutput = async (emosi) => {
  try {
    let xxi = await promiseTheaterIXX();
    let vgc = await promiseTheaterVGC();
    let mix = xxi.concat(vgc);
    let all=0
    mix.map(xxi => xxi.hasil === emosi && (all += 1))
    return all
  } catch (err) {
    console.log(err)
  }
};



module.exports = {
  promiseOutput,
};
