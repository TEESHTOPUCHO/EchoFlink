// Mobile UI Toggles
document.addEventListener('DOMContentLoaded', function() {
  
  // Φτιάχνουμε overlay
  const overlay = document.createElement('div');
  overlay.className = 'mobile-overlay';
  document.querySelector('.app').appendChild(overlay);
  
  // Φτιάχνουμε mobile κουμπιά στην topbar
  const topbarGroup = document.querySelector('.room-title-group');
  
  const sidebarBtn = document.createElement('button');
  sidebarBtn.className = 'mobile-sidebar-btn';
  sidebarBtn.innerHTML = '☰';
  sidebarBtn.title = 'Groups';
  sidebarBtn.style.display = 'none'; // θα εμφανιστεί μόνο σε mobile μέσω CSS
  
  const usersBtn = document.createElement('button');
  usersBtn.className = 'mobile-users-btn';
  usersBtn.innerHTML = '👥';
  usersBtn.title = 'Users';
  usersBtn.style.display = 'none';
  
  topbarGroup.prepend(usersBtn);
  topbarGroup.prepend(sidebarBtn);
  
  const sidebar = document.querySelector('.sidebar');
  const rightPanel = document.querySelector('.right-panel');
  
  function closeAll() {
    sidebar.classList.remove('mobile-open');
    rightPanel.classList.remove('mobile-open');
    overlay.classList.remove('active');
  }
  
  sidebarBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    if (sidebar.classList.contains('mobile-open')) {
      closeAll();
    } else {
      rightPanel.classList.remove('mobile-open');
      sidebar.classList.add('mobile-open');
      overlay.classList.add('active');
    }
  });
  
  usersBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    if (rightPanel.classList.contains('mobile-open')) {
      closeAll();
    } else {
      sidebar.classList.remove('mobile-open');
      rightPanel.classList.add('mobile-open');
      overlay.classList.add('active');
    }
  });
  
  overlay.addEventListener('click', closeAll);
  
  // Κλείσιμο όταν επιλέγεται group
  document.getElementById('groupList').addEventListener('click', function() {
    setTimeout(closeAll, 200);
  });
  
});