
<head>
<link rel="stylesheet" type="text/css" href="../Components/Statik/SideNav/SideNav.css"/>
</head>



            <ul id="slide-out" class="sidenav">


                <li>
                    <div class="user-view">
                        <div class="background">
                            <!-- <img src="images/office.jpg"> -->
                        </div>


                        <!-- <a href="#user"><img class="circle" src="images/yuna.jpg"></a> -->
                        <a href="#name"><span class="white-text name">John Doe</span></a>
                        <a href="#email"><span class="white-text email">jdandturk@gmail.com</span></a>
                    </div>
                </li>


                <li><a href="#!"><i class="material-icons">cloud</i>First Link With Icon</a></li>
                <li><a href="#!">Second Link</a></li>
                <li><div class="divider"></div></li>
                <li><a class="subheader">Subheader</a></li>
                <li><a class="waves-effect" href="#!">Third Link With Waves</a></li>
            </ul>


    <a href="#" data-target="slide-out" id="sidenav-menu-btn" class="sidenav-trigger"><i class="material-icons" id="sidenav-menu-icon">menu</i></a>

    <script>
    
    
    


        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init();
        });

        // Initialize collapsible (uncomment the lines below if you use the dropdown variation)
        // var collapsibleElem = document.querySelector('.collapsible');
        // var collapsibleInstance = M.Collapsible.init(collapsibleElem, options);

        // Or with jQuery

        $(document).ready(function(){
            $('.sidenav').sidenav();
        });</script>
        