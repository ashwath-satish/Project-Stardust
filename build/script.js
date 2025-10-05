const GLOBAL_ICON_SCALE = 0.5;

const ASSETS = [
  {
    id: 'carpet',
    name: 'Carpet',
    cost: 3,
    weight: 2, 
    variations: [
      { id: 'carpet_default', name: 'Default', img: 'items/carpet.png', offsetX: 0, offsetY: -30, scaleFactor: 1 }
    ]
  },
  {
    id: 'ceramicBlock',
    name: 'Ceramic Block',
    cost: 8,
    weight: 200, 
    variations: [
      { id: 'ceramicBlock_default', name: 'Default', img: 'items/ceramicBlock.png', offsetX: 0, offsetY: -30, scaleFactor: 1 }
    ]
  },
  {
    id: 'ceramicTile',
    name: 'Ceramic Tile',
    cost: 4,
    weight: 20, 
    variations: [
      { id: 'ceramicTile_default', name: 'Default', img: 'items/ceramicTile.png', offsetX: 0, offsetY: -30, scaleFactor: 1 }
    ]
  },
  {
    id: 'chair',
    name: 'Chair',
    cost: 12,
    weight: 7, 
    variations: [
      { id: 'chair_default', name: 'Default', img: 'items/chair.png', offsetX: 0, offsetY: -30, scaleFactor: 1 }
    ]
  },
  {
    id: 'computer',
    name: 'Computer',
    cost: 25,
    energyConsumption: 2,
    weight: 8, 
    variations: [
      { id: 'computer_default', name: 'Default', img: 'items/computer.png', offsetX: 0, offsetY: -30, scaleFactor: 1 }
    ]
  },
  {
    id: 'farm',
    name: 'Farm',
    
    foodGeneration: 5,
    energyConsumption: 1,
    cost: 35,
    weight: 50, 
    variations: [
      { id: 'farm_default', name: 'Default', img: 'items/farm.png', offsetX: 0, offsetY: -30, scaleFactor: 1 }
    ]
  },
  {
    id: 'glass',
    name: 'Glass',
    cost: 4,
    weight: 15, 
    variations: [
      { id: 'glass_default', name: 'Default', img: 'items/glass.png', offsetX: 0, offsetY: -30, scaleFactor: 1 }
    ]
  },
  {
    id: 'solarPanel',
    name: 'Solar Panel',
    energyGeneration: 50,
    
    cost: 120,
    weight: 25, 
    variations: [
      { id: 'solarPanel_default', name: 'Default', img: 'items/solarPanel.png', offsetX: 0, offsetY: -30, scaleFactor: 1 }
    ]
  },
  {
    id: 'table',
    name: 'Table',
    cost: 12,
    weight: 20, 
    variations: [
      { id: 'table_default', name: 'Default', img: 'items/table.png', offsetX: 0, offsetY: -30, scaleFactor: 1 }
    ]
  },
  {
    id: 'wallCornerBottom',
    name: 'Wall Corner Bottom',
    
    cost: 25,
    weight: 200, 
    variations: [
      { id: 'wallCornerBottom_default', name: 'Default', img: 'items/wallCornerBottom.png', offsetX: 0, offsetY: -30, scaleFactor: 1 }
    ]
  },
  {
    id: 'wallCornerTop',
    name: 'Wall Corner Top',
    
    cost: 25,
    weight: 200, 
    variations: [
      { id: 'wallCornerTop_default', name: 'Default', img: 'items/wallCornerTop.png', offsetX: 0, offsetY: -30, scaleFactor: 1 }
    ]
  },
  {
    id: 'wallLeft',
    name: 'Wall Left',
    cost: 25,
    weight: 200, 
    variations: [
      { id: 'wallLeft_default', name: 'Default', img: 'items/wallLeft.png', offsetX: 0, offsetY: -30, scaleFactor: 1 }
    ]
  },
  {
    id: 'wallRight',
    name: 'Wall Right',
    cost: 25,
    weight: 200, 
    variations: [
      { id: 'wallRight_default', name: 'Default', img: 'items/wallRight.png', offsetX: 0, offsetY: -30, scaleFactor: 1 }
    ]
  },
  {
    id: 'weight',
    name: 'Weight',
    cost: 20,
    weight: 50, 
    variations: [
      { id: 'weight_default', name: 'Default', img: 'items/weight.png', offsetX: 0, offsetY: -30, scaleFactor: 1 }
    ]
  },
  {
    id: 'woodenPlank',
    name: 'Wooden Plank',
    cost: 3,
    weight: 30, 
    variations: [
      { id: 'woodenPlank_default', name: 'Default', img: 'items/woodenPlank.png', offsetX: 0, offsetY: -30, scaleFactor: 1 }
    ]
  },
  {
    id: 'woodenTile',
    name: 'Wooden Tile',
    cost: 2,
    weight: 12, 
    variations: [
      { id: 'woodenTile_default', name: 'Default', img: 'items/woodenTile.png', offsetX: 0, offsetY: -30, scaleFactor: 1 }
    ]
  }
  ,
  {
    id: 'metalTile',
    name: 'Metal Tile',
    cost: 5,
    weight: 30,
    variations: [
      { id: 'metalTile_default', name: 'Default', img: 'items/metalTile.png', offsetX: 0, offsetY: -30, scaleFactor: 1 }
    ]
  },
  {
    id: 'metalBlock',
    name: 'Metal Block',
    cost: 15,
    weight: 250,
    variations: [
      { id: 'metalBlock_default', name: 'Default', img: 'items/metalBlock.png', offsetX: 0, offsetY: -30, scaleFactor: 1 }
    ]
  },
  {
    id: 'flowers',
    name: 'Flowers',
    cost: 2,
    weight: 1,
    variations: [
      { id: 'flowers_default', name: 'Default', img: 'items/flowers.png', offsetX: 0, offsetY: -30, scaleFactor: 1 }
    ]
  },
  {
    id: 'toilet',
    name: 'Toilet',
    cost: 18,
    weight: 40,
    variations: [
      { id: 'toilet_default', name: 'Default', img: 'items/toilet.png', offsetX: 0, offsetY: -30, scaleFactor: 1 }
    ]
  },
  {
    id: 'satellite',
    name: 'Satellite',
    cost: 200,
    weight: 100,
    variations: [
      { id: 'satellite_default', name: 'Default', img: 'items/satellite.png', offsetX: 0, offsetY: -30, scaleFactor: 1 }
    ]
  },
  {
    id: 'incinerator',
    name: 'Incinerator',
    cost: 50,
    weight: 80,
    variations: [
      { id: 'incinerator_default', name: 'Default', img: 'items/incinerator.png', offsetX: 0, offsetY: -30, scaleFactor: 1 }
    ]
  },
  {
    id: 'filtration',
    name: 'Filtration',
    cost: 80,
    weight: 40,
    variations: [
      { id: 'filtration_default', name: 'Default', img: 'items/filtration.png', offsetX: 0, offsetY: -30, scaleFactor: 1 }
    ]
  },
  {
    id: 'canisters',
    name: 'Canisters',
    cost: 6,
    weight: 15,
    variations: [
      { id: 'canisters_default', name: 'Default', img: 'items/canisters.png', offsetX: 0, offsetY: -30, scaleFactor: 1 }
    ]
  },
  {
    id: 'mattress',
    name: 'Mattress',
    cost: 10,
    weight: 12,
    variations: [
      { id: 'mattress_default', name: 'Default', img: 'items/mattress.png', offsetX: 0, offsetY: -30, scaleFactor: 1 }
    ]
  },
  {
    id: 'stove',
    name: 'Stove',
    cost: 30,
    energyConsumption: 2,
    weight: 22,
    variations: [
      { id: 'stove_default', name: 'Default', img: 'items/stove.png', offsetX: 0, offsetY: -30, scaleFactor: 1 }
    ]
  }
];

let money = 100000;
const placed = [];
let selectedItem = ASSETS[0];
let selectedVariation = selectedItem.variations[0];
let selectedFlip = 'left';
let currentLayer = 1; 

ASSETS.forEach(item => {
  item.variations.forEach(v => {
    if (v.img){
      v._image = new Image();
      v._image.src = v.img;
    }
  });
});


const MOON_PATHS = [
  'items/moon/1.png',
  'items/moon/2.png',
  'items/moon/3.png',
  'items/moon/4.png'
];
const MOON_VARIATIONS = MOON_PATHS.map(p => {
  const img = new Image(); img.src = p;
  return { _image: img, imgSrc: p, offsetX: 0, offsetY: -120, scaleFactor: 1.2 };
});


const MOON_PROBABILITY = 0.006; 


const MINI_MOON_INDICES = [1, 2]; 
const MINI_MOON_PROBABILITY = 0.03; 
const MINI_MOON_SCALE_FACTOR = 0.5; 
const MINI_MOON_VARIATIONS = MINI_MOON_INDICES.map(i => {
  const base = MOON_VARIATIONS[i];
  
  return { _image: base._image, imgSrc: base.imgSrc, offsetX: 0, offsetY: (base.offsetY || 0) - 40, scaleFactor: (base.scaleFactor || 1) * MINI_MOON_SCALE_FACTOR };
});

function frac(x){ return x - Math.floor(x); }
function randForCoord(x,y,seed=0){
  
  const v = Math.sin(x*12.9898 + y*78.233 + seed*37.719) * 43758.5453;
  return frac(v);
}

function generateMoonsInView(){
  
  const corners = [
    screenToIso(0,0),
    screenToIso(canvas.width,0),
    screenToIso(0,canvas.height),
    screenToIso(canvas.width,canvas.height)
  ];
  let minGx = Infinity, maxGx = -Infinity, minGy = Infinity, maxGy = -Infinity;
  corners.forEach(c => { minGx = Math.min(minGx, c.gx); maxGx = Math.max(maxGx, c.gx); minGy = Math.min(minGy, c.gy); maxGy = Math.max(maxGy, c.gy); });
  const margin = 12; 
  const gx0 = Math.floor(minGx) - margin, gx1 = Math.ceil(maxGx) + margin;
  const gy0 = Math.floor(minGy) - margin, gy1 = Math.ceil(maxGy) + margin;

  for(let gx = gx0; gx <= gx1; gx++){
    for(let gy = gy0; gy <= gy1; gy++){
      
      const existing = placed.some(p => (p.assetId === 'moon' || p.assetId === 'miniMoon') && p.x === gx && p.y === gy);
      if(existing) continue;

      const r = randForCoord(gx, gy, 0);
      if(r < MOON_PROBABILITY){
        
        const idx = Math.floor(randForCoord(gx, gy, 1) * MOON_VARIATIONS.length);
        const variant = MOON_VARIATIONS[idx];
        
        const varClone = Object.assign({}, variant);
        
        const extraOffsetY = Math.floor(randForCoord(gx, gy, 2) * 60) - 20;
        varClone.offsetY = (varClone.offsetY || 0) + extraOffsetY;
        
        varClone.scaleFactor = 0.9 + randForCoord(gx, gy, 3) * 0.8;

        placed.push({ x: gx, y: gy, var: varClone, flip: (randForCoord(gx,gy,4) < 0.5 ? 'left' : 'right'), layer: 1, assetId: 'moon' });
      }
    }
  }
}

function generateMiniMoonsInView(){
  const corners = [
    screenToIso(0,0),
    screenToIso(canvas.width,0),
    screenToIso(0,canvas.height),
    screenToIso(canvas.width,canvas.height)
  ];
  let minGx = Infinity, maxGx = -Infinity, minGy = Infinity, maxGy = -Infinity;
  corners.forEach(c => { minGx = Math.min(minGx, c.gx); maxGx = Math.max(maxGx, c.gx); minGy = Math.min(minGy, c.gy); maxGy = Math.max(maxGy, c.gy); });
  const margin = 14;
  const gx0 = Math.floor(minGx) - margin, gx1 = Math.ceil(maxGx) + margin;
  const gy0 = Math.floor(minGy) - margin, gy1 = Math.ceil(maxGy) + margin;

  for(let gx = gx0; gx <= gx1; gx++){
    for(let gy = gy0; gy <= gy1; gy++){
      const existing = placed.some(p => (p.assetId === 'miniMoon') && p.x === gx && p.y === gy);
      if(existing) continue;
      const r = randForCoord(gx, gy, 10);
      if(r < MINI_MOON_PROBABILITY){
        const idx = Math.floor(randForCoord(gx, gy, 11) * MINI_MOON_VARIATIONS.length);
        const variant = MINI_MOON_VARIATIONS[idx];
        const varClone = Object.assign({}, variant);
        const extraOffsetY = Math.floor(randForCoord(gx, gy, 12) * 40) - 10;
        varClone.offsetY = (varClone.offsetY || 0) + extraOffsetY;
        varClone.scaleFactor = (varClone.scaleFactor || 1) * (0.9 + randForCoord(gx, gy, 13) * 0.2);

        placed.push({ x: gx, y: gy, var: varClone, flip: (randForCoord(gx,gy,14) < 0.5 ? 'left' : 'right'), layer: 1, assetId: 'miniMoon' });
      }
    }
  }
}

const canvas = document.getElementById('isoCanvas');
const ctx = canvas.getContext('2d');
resizeCanvas();

let tileW = 120, tileH = 60;
let cam = { x:0,y:0,zoom:1 };
let camGoal = { x:0,y:0,zoom:1 };
let isPanning=false, panStart={};
let mouse={x:0,y:0,gridX:0,gridY:0,overCanvas:false};
let rightClickStart = null; 

let shiftPlacementStart = null; 
let shiftPlacementActive = false;

const itemsList=document.getElementById('itemsList');
const moneyEl=document.getElementById('money');
const layerSlider = document.getElementById('layerSlider');
const layerDisplay = document.getElementById('layerDisplay');
if(layerSlider){
  layerSlider.value = currentLayer;
  layerSlider.addEventListener('input', (e)=>{
    currentLayer = Math.min(5, Math.max(1, parseInt(e.target.value,10)||1));
    if(layerDisplay) layerDisplay.textContent = currentLayer;
  });
}
if(layerDisplay) layerDisplay.textContent = currentLayer;
function buildItemsUI(){
  itemsList.innerHTML='';
  ASSETS.forEach(item=>{
    const card=document.createElement('div');
    card.className='itemCard';
    card.dataset.itemId=item.id;

    const thumbDiv = document.createElement('div');
    thumbDiv.className = 'itemThumb';
    if(item.variations && item.variations[0] && item.variations[0]._image){
      const preview = new Image();
      preview.src = item.variations[0].img;
      const previewSize = Math.max(16, Math.round(48 * GLOBAL_ICON_SCALE));
      preview.style.width = previewSize + 'px';
      preview.style.height = 'auto';
      preview.style.objectFit = 'contain';
      preview.alt = item.name;
      thumbDiv.appendChild(preview);
    } else {
      thumbDiv.textContent = item.name;
    }

    const textDiv = document.createElement('div');
    textDiv.style.display = 'flex';
    textDiv.style.flexDirection = 'column';
    textDiv.style.justifyContent = 'center';
    textDiv.style.paddingLeft = '8px';

    const nameSpan = document.createElement('div');
    nameSpan.textContent = item.name;
    const infoDiv = document.createElement('div');
    infoDiv.style.flex = '1';
    
    const costLine = document.createElement('div');
    costLine.textContent = item.cost + ' $';
    
    const weightLine = document.createElement('div');
    weightLine.style.fontSize = '12px';
    weightLine.style.color = '#666';
    if (typeof item.weight !== 'undefined') {
      weightLine.textContent = item.weight + ' kgs';
    } else {
      weightLine.textContent = '';
    }
    infoDiv.appendChild(costLine);
    infoDiv.appendChild(weightLine);

    textDiv.appendChild(nameSpan);
    textDiv.appendChild(infoDiv);

    card.appendChild(thumbDiv);
    card.appendChild(textDiv);

    card.onclick=()=>{
      selectedItem=item;
      selectedVariation=item.variations[0];
      highlightSelectedInUI();
    };
    itemsList.appendChild(card);
  });
}
function highlightSelectedInUI(){
  document.querySelectorAll('.itemCard').forEach(c=>{
    c.classList.toggle('selected',c.dataset.itemId===selectedItem.id);
  });
  moneyEl.textContent=money;
}
buildItemsUI();highlightSelectedInUI();

const panel = document.getElementById('panel');
const togglePanelBtn = document.getElementById('togglePanel');
if(togglePanelBtn && panel){
  togglePanelBtn.onclick = () => panel.classList.toggle('closed');
}
document.getElementById('zoomIn').onclick=()=>camGoal.zoom=Math.min(3,camGoal.zoom*1.15);
document.getElementById('zoomOut').onclick=()=>camGoal.zoom=Math.max(0.4,camGoal.zoom/1.15);

canvas.addEventListener('contextmenu',e=>e.preventDefault());
canvas.addEventListener('mousemove',e=>{
  const r=canvas.getBoundingClientRect();
  mouse.x=e.clientX-r.left;mouse.y=e.clientY-r.top;mouse.overCanvas=true;
  
  if(rightClickStart && !isPanning){
    const dx = e.clientX - rightClickStart.sx;
    const dy = e.clientY - rightClickStart.sy;
    if(Math.hypot(dx,dy) > 6){
      isPanning = true;
      rightClickStart.moved = true;
      panStart = { sx: rightClickStart.sx, sy: rightClickStart.sy, gx: camGoal.x, gy: camGoal.y };
    }
  }
  if(isPanning){camGoal.x=panStart.gx-(e.clientX-panStart.sx)/cam.zoom;camGoal.y=panStart.gy-(e.clientY-panStart.sy)/cam.zoom;}
  updateMouseGrid();
});
canvas.addEventListener('mouseleave',()=>mouse.overCanvas=false);
canvas.addEventListener('mousedown',e=>{
  if(e.button===2){
    
     rightClickStart = { sx: e.clientX, sy: e.clientY, gx: mouse.gridX, gy: mouse.gridY };
    
  }
  if(e.button===0){
    
    if(e.shiftKey){
      shiftPlacementStart = { gx: mouse.gridX, gy: mouse.gridY };
      shiftPlacementActive = true;
    } else {
      placeItemAt(mouse.gridX,mouse.gridY);
    }
  }
});
window.addEventListener('mouseup',e=>{
  if(e.button===2){
    
    if(isPanning){
      isPanning = false;
    } else {
      
      if(rightClickStart){
        const gx = rightClickStart.gx;
        const gy = rightClickStart.gy;
        deleteItemsAt(gx, gy, currentLayer);
      }
    }
    rightClickStart = null;
  }
  if(e.button===0){
    
    if(shiftPlacementActive && shiftPlacementStart){
      const start = shiftPlacementStart;
      const end = { gx: mouse.gridX, gy: mouse.gridY };
      
      const x0 = Math.min(start.gx, end.gx);
      const x1 = Math.max(start.gx, end.gx);
      const y0 = Math.min(start.gy, end.gy);
      const y1 = Math.max(start.gy, end.gy);

      
      for(let gy = y0; gy <= y1; gy++){
        for(let gx = x0; gx <= x1; gx++){
          placeItemAt(gx,gy);
        }
      }

      shiftPlacementActive = false;
      shiftPlacementStart = null;
    }
  }
});


function getAssetById(id){
  return ASSETS.find(a=>a.id===id) || null;
}


function deleteItemsAt(gx,gy,layer){
  let refund = 0;
  
  const remaining = [];
  placed.forEach(p=>{
    const pLayer = p.layer||1;
    if(p.x===gx && p.y===gy && pLayer===layer){
      const aid = p.assetId || (p.var && p.var.id && p.var.id.split('_')[0]);
      const asset = getAssetById(aid);
      if(asset && asset.cost){ refund += asset.cost; }
      
    } else {
      remaining.push(p);
    }
  });
  if(refund>0){
    money += refund;
    highlightSelectedInUI();
  }
  
  placed.length = 0;
  remaining.forEach(x=>placed.push(x));
  saveToLocalStorageDebounced();
}

window.addEventListener('keydown',e=>{
  const step=60/cam.zoom;
  if(e.key==='ArrowLeft'){camGoal.x-=step;}
  if(e.key==='ArrowRight'){camGoal.x+=step;}
  if(e.key==='ArrowUp'){camGoal.y-=step;}
  if(e.key==='ArrowDown'){camGoal.y+=step;}
  if(e.key==='+'||e.key==='='){camGoal.zoom=Math.min(3,camGoal.zoom*1.15);}
  if(e.key==='-'){camGoal.zoom=Math.max(0.4,camGoal.zoom/1.15);}
  
  if(e.key==='e' || e.key==='E'){
    selectedFlip = 'left';
  }
  if(e.key==='q' || e.key==='Q'){
    selectedFlip = 'right';
  }
  
  if(e.key==='p' || e.key==='P'){
    currentLayer = Math.min(5, currentLayer + 1);
    if(layerSlider) layerSlider.value = currentLayer;
    if(layerDisplay) layerDisplay.textContent = currentLayer;
  }
  if(e.key==='o' || e.key==='O'){
    currentLayer = Math.max(1, currentLayer - 1);
    if(layerSlider) layerSlider.value = currentLayer;
    if(layerDisplay) layerDisplay.textContent = currentLayer;
  }
  
  if(e.key==='s' || e.key==='S'){
    const str = getCompactSaveString();
    try{
      if(navigator.clipboard && navigator.clipboard.writeText){
        navigator.clipboard.writeText(str);
      } else {
        const ta = document.createElement('textarea'); ta.value = str; document.body.appendChild(ta);
        ta.select(); document.execCommand('copy'); document.body.removeChild(ta);
      }
    }catch(err){}
    try{ localStorage.setItem('stardust_save_v1', str); }catch(e){}
    showSaveCopiedPopup();
  }
  
  if(e.key==='l' || e.key==='L'){
    showLoadModal();
  }
});

function isoToScreen(gx,gy){
  const px=(gx-gy)*(tileW/2)*cam.zoom;
  const py=(gx+gy)*(tileH/2)*cam.zoom;
  return {x:canvas.width/2+(px-cam.x*cam.zoom),y:canvas.height/2+(py-cam.y*cam.zoom)};
}
function screenToIso(sx,sy){
  const wx=(sx-canvas.width/2+cam.x*cam.zoom)/cam.zoom;
  const wy=(sy-canvas.height/2+cam.y*cam.zoom)/cam.zoom;
  return {gx:(wx/(tileW/2)+wy/(tileH/2))/2,gy:(wy/(tileH/2)-wx/(tileW/2))/2};
}
function updateMouseGrid(){const iso=screenToIso(mouse.x,mouse.y);mouse.gridX=Math.round(iso.gx);mouse.gridY=Math.round(iso.gy);}
function placeItemAt(gx,gy){
  if(money<selectedItem.cost)return;
  
  
  
  const isCarpetAsset = (id)=> ['carpet','ceramicTile','woodenPlank','woodenTile'].includes(id);
  const selectedIsCarpet = isCarpetAsset(selectedItem.id);

  
  const placedAssetId = (p) => p.assetId || (p.var && p.var.id && p.var.id.split('_')[0]);

  const itemsOnTile = placed.filter(pp => pp.x===gx && pp.y===gy && ((pp.layer||1)===currentLayer));
  
  const occupancyCandidates = itemsOnTile.filter(pp => (pp.assetId !== 'moon' && pp.assetId !== 'miniMoon'));
  const existingCarpet = occupancyCandidates.some(pp => isCarpetAsset(placedAssetId(pp)));
  const existingNonCarpet = occupancyCandidates.some(pp => !isCarpetAsset(placedAssetId(pp)));

  if(selectedIsCarpet){
    if(existingCarpet) return; 
    
  } else {
    
    if(existingNonCarpet) return;
  }

  
  placed.push({x:gx,y:gy,var:selectedVariation,flip:selectedFlip,layer:currentLayer,assetId:selectedItem.id});
  money-=selectedItem.cost;highlightSelectedInUI();
  saveToLocalStorageDebounced();
}

function drawGrid(cx,cy,range=12){
  ctx.strokeStyle='rgba(0,0,0,0.2)';
  ctx.lineWidth=1;
  for(let x=cx-range;x<=cx+range;x++){
    for(let y=cy-range;y<=cy+range;y++){
      const s=isoToScreen(x,y);
      ctx.beginPath();
      ctx.moveTo(s.x,s.y-tileH/2*cam.zoom);
      ctx.lineTo(s.x+tileW/2*cam.zoom,s.y);
      ctx.lineTo(s.x,s.y+tileH/2*cam.zoom);
      ctx.lineTo(s.x-tileW/2*cam.zoom,s.y);
      ctx.closePath();
      ctx.stroke();
    }
  }
}

function drawImageOnTile(gx, gy, varData, alpha = 1) {
  const s = isoToScreen(gx, gy);
  const img = varData._image;
  if (!img || !img.complete) return;
  const base = tileW * (varData.scaleFactor || 1) * cam.zoom;

  const w = base;
  let h = (img.height / img.width) * base;
  h *= 0.875;

  
  const drawX = s.x - w / 2 + (varData.offsetX || 0) * cam.zoom;
  const drawY = s.y - h / 2 + (varData.offsetY || 0) * cam.zoom;

  
  const bboxLeft = drawX;
  const bboxTop = drawY;
  const bboxRight = drawX + w;
  const bboxBottom = drawY + h;

  
  const distToLeft = s.x;
  const distToRight = canvas.width - s.x;
  const distToTop = s.y;
  const distToBottom = canvas.height - s.y;
  const minEdgeDist = Math.min(distToLeft, distToRight, distToTop, distToBottom);

  const EDGE_FADE_START = 180;

  const edgeAlpha = Math.max(0, Math.min(1, minEdgeDist / EDGE_FADE_START));

  const finalAlpha = alpha * edgeAlpha;

  
  const OFFSCREEN_MARGIN = 0; 
  const fullyOffscreen = (bboxRight < -OFFSCREEN_MARGIN) || (bboxLeft > canvas.width + OFFSCREEN_MARGIN) || (bboxBottom < -OFFSCREEN_MARGIN) || (bboxTop > canvas.height + OFFSCREEN_MARGIN);

  if (finalAlpha <= 0.01 || (fullyOffscreen && finalAlpha <= 0.02)) return;

  ctx.save();
  ctx.globalAlpha = finalAlpha;

  const flip = varData.flip || varData.__flip || 'left';
  if (flip === 'right') {
    
    ctx.translate(drawX + w / 2, 0);
    ctx.scale(-1, 1);
    ctx.drawImage(img, -w / 2, drawY, w, h);
  } else {
    ctx.drawImage(img, drawX, drawY, w, h);
  }
  ctx.restore();
}


function draw(){
  ctx.fillStyle='#6b7075';ctx.fillRect(0,0,canvas.width,canvas.height);
  const center=screenToIso(canvas.width/2,canvas.height/2);
  const cx=Math.round(center.gx),cy=Math.round(center.gy);
  
  try{ generateMoonsInView(); }catch(e){ }
  try{ generateMiniMoonsInView(); }catch(e){ }
  
  try{
    
    const miniMoons = placed.filter(p => p.assetId === 'miniMoon');
    miniMoons.sort((a,b)=> isoToScreen(a.x,a.y).y - isoToScreen(b.x,b.y).y);
    miniMoons.forEach(m => {
      const varWithFlip = Object.assign({}, m.var, { flip: m.flip || 'left' });
      drawImageOnTile(m.x, m.y, varWithFlip, 1);
    });

    const moons = placed.filter(p => p.assetId === 'moon');
    moons.sort((a,b)=> isoToScreen(a.x,a.y).y - isoToScreen(b.x,b.y).y);
    moons.forEach(m => {
      const varWithFlip = Object.assign({}, m.var, { flip: m.flip || 'left' });
      drawImageOnTile(m.x, m.y, varWithFlip, 1);
    });
  }catch(e){ }
  drawGrid(cx,cy,14);
  
  
  
  for (let layer = 1; layer <= 5; layer++) {
    
  const itemsThisLayer = placed.filter(p => (p.layer || 1) === layer && p.assetId !== 'moon' && p.assetId !== 'miniMoon');
    const isCarpet = (p) => {
      const id = p.assetId || (p.var && p.var.id && p.var.id.split('_')[0]);
      return ['carpet','ceramicTile','woodenPlank','woodenTile'].includes(id);
    };
    
    const carpets = itemsThisLayer.filter(isCarpet).sort((a,b)=>isoToScreen(a.x,a.y).y - isoToScreen(b.x,b.y).y);
    const others = itemsThisLayer.filter(p=>!isCarpet(p)).sort((a,b)=>isoToScreen(a.x,a.y).y - isoToScreen(b.x,b.y).y);
    carpets.concat(others).forEach(p => {
      const varWithFlip = Object.assign({}, p.var, { flip: p.flip || 'left' });
      drawImageOnTile(p.x, p.y, varWithFlip, 1);
    });
  }
  if(mouse.overCanvas){
    ctx.strokeStyle='rgba(14,165,255,0.3)';
    const s=isoToScreen(mouse.gridX,mouse.gridY);
    ctx.beginPath();
    ctx.moveTo(s.x,s.y-tileH/2*cam.zoom);
    ctx.lineTo(s.x+tileW/2*cam.zoom,s.y);
    ctx.lineTo(s.x,s.y+tileH/2*cam.zoom);
    ctx.lineTo(s.x-tileW/2*cam.zoom,s.y);
    ctx.closePath();ctx.stroke();
    
    const previewVar = Object.assign({}, selectedVariation, { flip: selectedFlip });
    
  
  const occupied = placed.some(pp=>pp.x===mouse.gridX && pp.y===mouse.gridY && ((pp.layer||1)===currentLayer) && pp.assetId !== 'moon' && pp.assetId !== 'miniMoon');
    if(occupied){
      
      drawImageOnTile(mouse.gridX,mouse.gridY,previewVar,0.25);
      const s = isoToScreen(mouse.gridX,mouse.gridY);
      ctx.save();
      ctx.fillStyle = 'rgba(220,60,60,0.25)';
      ctx.beginPath();
      ctx.moveTo(s.x,s.y-tileH/2*cam.zoom);
      ctx.lineTo(s.x+tileW/2*cam.zoom,s.y);
      ctx.lineTo(s.x,s.y+tileH/2*cam.zoom);
      ctx.lineTo(s.x-tileW/2*cam.zoom,s.y);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    } else {
      drawImageOnTile(mouse.gridX,mouse.gridY,previewVar,0.5);
    }
    
    if(shiftPlacementActive && shiftPlacementStart){
      const sx = shiftPlacementStart.gx, sy = shiftPlacementStart.gy;
      const ex = mouse.gridX, ey = mouse.gridY;
      const x0 = Math.min(sx, ex), x1 = Math.max(sx, ex);
      const y0 = Math.min(sy, ey), y1 = Math.max(sy, ey);

      
      for(let gy = y0; gy <= y1; gy++){
        for(let gx = x0; gx <= x1; gx++){
          const s2 = isoToScreen(gx,gy);
          ctx.save();
          ctx.fillStyle = 'rgba(14,165,255,0.08)';
          ctx.beginPath();
          ctx.moveTo(s2.x,s2.y-tileH/2*cam.zoom);
          ctx.lineTo(s2.x+tileW/2*cam.zoom,s2.y);
          ctx.lineTo(s2.x,s2.y+tileH/2*cam.zoom);
          ctx.lineTo(s2.x-tileW/2*cam.zoom,s2.y);
          ctx.closePath(); ctx.fill();
          ctx.restore();

          
          drawImageOnTile(gx,gy,previewVar,0.35);
        }
      }
    }
  }
}
function loop(){
  cam.x+=(camGoal.x-cam.x)/5;
  cam.y+=(camGoal.y-cam.y)/5;
  cam.zoom+=(camGoal.zoom-cam.zoom)/5;
  draw();requestAnimationFrame(loop);
}
function resizeCanvas(){
  canvas.width=window.innerWidth;canvas.height=window.innerHeight;
}





function getCompactSaveString(){
  
  const map = {};
  ASSETS.forEach((a,i)=>map[a.id]=i);
  const parts = [];
  for(const p of placed){
    const aid = p.assetId || (p.var && p.var.id && p.var.id.split('_')[0]);
    const assetIndex = (typeof map[aid] === 'number') ? map[aid] : -1;
    const vx = p.x; const vy = p.y; const layer = p.layer||1;
    const flip = (p.flip === 'right' || (p.var && p.var.flip === 'right')) ? 1 : 0;
    
    let varIndex = 0;
    if(assetIndex>=0 && ASSETS[assetIndex].variations){
      const vars = ASSETS[assetIndex].variations;
      varIndex = vars.findIndex(v=>v.img === (p.var && p.var.img || v.img));
      if(varIndex<0) varIndex = 0;
    }
    parts.push([assetIndex,vx,vy,layer,flip,varIndex].join(','));
  }
  const camPart = [camGoal.x||0, camGoal.y||0, camGoal.zoom||1].map(n=>Math.round(n*100)/100).join(',');
  return '1|'+camPart+'|'+parts.join(';');
}

function parseCompactSaveString(str){
  if(!str || typeof str !== 'string') return null;
  const segs = str.split('|');
  if(segs.length<3) return null;
  
  const camParts = segs[1].split(',').map(Number);
  const itemsPart = segs[2];
  const items = itemsPart.length? itemsPart.split(';').map(s=>{
    const f = s.split(',').map(Number);
    
    return { assetIndex: f[0], x: f[1], y: f[2], layer: f[3], flip: (f[4]===1?'right':'left'), varIndex: (f[5]||0) };
  }):[];
  return { cam: { x: camParts[0]||0, y: camParts[1]||0, zoom: camParts[2]||1 }, items };
}

function loadFromSaveObject(obj){
  if(!obj) return;
  placed.length = 0;
  obj.items.forEach(it=>{
    const ai = it.assetIndex;
    if(ai<0 || ai>=ASSETS.length) return;
    const asset = ASSETS[ai];
    const v = asset.variations && asset.variations[it.varIndex] ? asset.variations[it.varIndex] : asset.variations[0];
    
    const varClone = Object.assign({}, v);
    placed.push({ x: it.x, y: it.y, var: varClone, flip: it.flip, layer: it.layer, assetId: asset.id });
  });
  camGoal.x = cam.x = obj.cam.x||0; camGoal.y = cam.y = obj.cam.y||0; camGoal.zoom = cam.zoom = obj.cam.zoom||1;
  saveToLocalStorageDebounced();
}

function tryAutoLoadFromLocalStorage(){
  try{
    const s = localStorage.getItem('stardust_save_v1');
    if(s){
      const parsed = parseCompactSaveString(s);
      if(parsed) loadFromSaveObject(parsed);
    }
  }catch(e){}
}


let _savePopupTimer=null;
function showSaveCopiedPopup(){
  let el = document.getElementById('stardust-save-popup');
  if(!el){
    el = document.createElement('div'); el.id='stardust-save-popup'; el.className='stardust-save-popup';
    const msg = document.createElement('div'); msg.className='message'; msg.textContent='Save file copied to clipboard!';
    const progressWrap = document.createElement('div'); progressWrap.className='progress';
    const bar = document.createElement('i'); progressWrap.appendChild(bar);
    el.appendChild(msg); el.appendChild(progressWrap);
    document.body.appendChild(el);
  }
  
  el.classList.remove('hide');
  void el.offsetWidth; 
  el.classList.add('show');
  
  const DURATION = 1700;
  const barEl = el.querySelector('.progress > i');
  if(barEl){ barEl.style.animationDuration = DURATION + 'ms'; }
  if(_savePopupTimer) clearTimeout(_savePopupTimer);
  _savePopupTimer = setTimeout(()=>{
    el.classList.remove('show'); el.classList.add('hide');
  }, DURATION);
  
  el.addEventListener('animationend', function onAnim(e){ if(e.animationName==='stardustPopupOut'){ el.style.display='none'; el.removeEventListener('animationend', onAnim); } });
  el.style.display='block';
}


let _autosaveTimer = null;
function saveToLocalStorageDebounced(delay = 500){
  if(_autosaveTimer) clearTimeout(_autosaveTimer);
  _autosaveTimer = setTimeout(()=>{
    try{
      const str = getCompactSaveString();
      localStorage.setItem('stardust_save_v1', str);
      showAutosavedIndicator();
    }catch(e){}
  }, delay);
}

let _autosavedIndicatorTimer = null;
function showAutosavedIndicator(duration = 1200){
  const el = document.getElementById('autosaveIndicator');
  if(!el) return;
  el.classList.add('show'); el.setAttribute('aria-hidden','false');
  if(_autosavedIndicatorTimer) clearTimeout(_autosavedIndicatorTimer);
  _autosavedIndicatorTimer = setTimeout(()=>{
    el.classList.remove('show'); el.setAttribute('aria-hidden','true');
  }, duration);
}

function showLoadModal(){
  let m = document.getElementById('stardust-load-modal');
  if(!m){
    m = document.createElement('div'); m.id='stardust-load-modal'; m.className='stardust-load-modal';
    const overlay = document.createElement('div'); overlay.className='overlay';
    const box = document.createElement('div'); box.className='box';
    const ta = document.createElement('textarea'); ta.id='stardust-load-ta'; ta.placeholder='Paste save string here...';
    const btnRow = document.createElement('div'); btnRow.className='row';
    const cancel = document.createElement('button'); cancel.textContent='Cancel';
    const loadBtn = document.createElement('button'); loadBtn.textContent='Load'; loadBtn.className='btnPrimary';
    btnRow.appendChild(cancel); btnRow.appendChild(loadBtn);
    box.appendChild(ta); box.appendChild(btnRow);
    m.appendChild(overlay); m.appendChild(box); document.body.appendChild(m);

    cancel.onclick = ()=>{ closeLoadModal(); };
    overlay.onclick = ()=>{ closeLoadModal(); };
    loadBtn.onclick = ()=>{
      const v = ta.value.trim();
      const parsed = parseCompactSaveString(v);
      if(parsed){ loadFromSaveObject(parsed); closeLoadModal(); try{ localStorage.setItem('stardust_save_v1', v);}catch(e){} }
      else { alert('Invalid save string'); }
    };
  }
  
  const ta = document.getElementById('stardust-load-ta');
  try{ ta.value = localStorage.getItem('stardust_save_v1') || ''; }catch(e){ ta.value=''; }
  m.classList.remove('closing');
  m.classList.add('open');
  
  setTimeout(()=>{ ta.focus(); ta.select(); },80);
}

function closeLoadModal(){
  const m = document.getElementById('stardust-load-modal'); if(!m) return;
  m.classList.add('closing');
  m.classList.remove('open');
  const onAnim = (e)=>{ if(e.animationName==='stardustFadeOut' || e.animationName==='stardustSlideUp'){ m.style.display='none'; m.classList.remove('closing'); m.removeEventListener('animationend', onAnim); } };
  m.addEventListener('animationend', onAnim);
}


tryAutoLoadFromLocalStorage();



loop();


(function(){
  const resetBtn = document.getElementById('resetBtn');
  const modal = document.getElementById('reset-modal');
  if(!modal || !resetBtn) return;
  const overlay = modal.querySelector('.overlay');
  const btnCancel = document.getElementById('resetCancel');
  const btnConfirm = document.getElementById('resetConfirm');

  function openModal(){
    modal.classList.remove('closing');
    modal.classList.add('open');
    modal.setAttribute('aria-hidden','false');
    setTimeout(()=>{
      const confirm = document.getElementById('resetConfirm'); if(confirm) confirm.focus();
    },120);
  }
  function closeModal(){
    modal.classList.add('closing');
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden','true');
    const onAnim = (e)=>{ if(e.animationName==='resetFadeOut' || e.animationName==='resetScaleOut'){ modal.style.display='none'; modal.classList.remove('closing'); modal.removeEventListener('animationend', onAnim); } };
    modal.addEventListener('animationend', onAnim);
  }

  resetBtn.addEventListener('click', (e)=>{ openModal(); });
  btnCancel.addEventListener('click', (e)=>{ closeModal(); });
  overlay.addEventListener('click', (e)=>{ closeModal(); });
  btnConfirm.addEventListener('click', (e)=>{
    
    placed.length = 0;
    try{ localStorage.removeItem('stardust_save_v1'); }catch(e){}
    if(_autosaveTimer){ clearTimeout(_autosaveTimer); _autosaveTimer = null; }
    highlightSelectedInUI();
    closeModal();
  });

  document.addEventListener('keydown', (e)=>{
    if(modal.classList.contains('open') && e.key === 'Escape'){
      closeModal();
    }
  });
})();