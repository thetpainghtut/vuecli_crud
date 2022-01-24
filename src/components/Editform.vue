<template>
  <form class="row gy-2 gx-3 align-items-center">
    <div class="col-auto">
      <label class="visually-hidden" for="autoSizingInput">Name</label>
      <input type="text" class="form-control" id="autoSizingInput" placeholder="Jane Doe">
    </div>
    <div class="col-auto">
      <label class="visually-hidden" for="inputprice">Price</label>
      <div class="input-group">
        <div class="input-group-text">@</div>
        <input type="number" class="form-control" id="inputprice" placeholder="5000">
      </div>
    </div>
    <div class="col-auto">
      <button type="submit" class="btn btn-primary">Update</button>
    </div>
  </form>
</template>