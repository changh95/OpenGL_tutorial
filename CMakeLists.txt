cmake_minimum_required(VERSION 3.10)
project(OpenGL_Study LANGUAGES CXX)

set(CMAKE_MODULE_PATH ${CMAKE_CURRENT_SOURCE_DIR} ${CMAKE_MODULE_PATH})

#------------------------------------------
# CXX build flags
#------------------------------------------
set(CMAKE_VERBOSE_MAKEFILE no)
set(CMAKE_CXX_STANDARD 17)

if (CMAKE_BUILD_TYPE)
    # Terminate build if build option is invalid (i.e. Not Debug or Release)
    if (NOT CMAKE_BUILD_TYPE MATCHES "Debug" AND NOT CMAKE_BUILD_TYPE MATCHES "Release")
        message(FATAL_ERROR "Invalid build type: should be either Debug or Release")
    endif (NOT CMAKE_BUILD_TYPE MATCHES "Debug" AND NOT CMAKE_BUILD_TYPE MATCHES "Release")

    message(STATUS "Build type: ${CMAKE_BUILD_TYPE}")
endif (CMAKE_BUILD_TYPE)

# Default build type (Release)
if (NOT CMAKE_BUILD_TYPE AND NOT CMAKE_CONFIGURATION_TYPES)
    message(STATUS "Build type: Release (default)")
    set(CMAKE_BUILD_TYPE "Release" CACHE
            STRING "Choose the type of build." FORCE)
    set_property(CACHE CMAKE_BUILD_TYPE PROPERTY STRINGS
            "Debug" "Release") # Set the possible values of build type for cmake-gui
endif (NOT CMAKE_BUILD_TYPE AND NOT CMAKE_CONFIGURATION_TYPES)

if (CMAKE_BUILD_TYPE MATCHES "Debug")
    set(CMAKE_CXX_FLAGS "-g -O0 -fPIC")
elseif (CMAKE_BUILD_TYPE MATCHES "Release")
    set(CMAKE_CXX_FLAGS "-g -O3 -DNDEBUG -fPIC")
endif ()

#----------------------------------------
# Load third party libraries
#----------------------------------------

# Define system-installed library paths
list(APPEND CMAKE_PREFIX_PATH /usr)

message(STATUS "Finding GLUT,GLEW,OpenGL...")

if (APPLE)
    set(CMAKE_EXE_LINKER_FLAGS "-framework OpenGL -framework GLUT")
else (APPLE)  # Linux
    find_package(OpenGL REQUIRED)
    find_package(GLUT REQUIRED)
    include_directories(${OPENGL_INCLUDE_DIRS} ${GLUT_INCLUDE_DIRS})
endif (APPLE)

find_package(GLEW REQUIRED)
if (${GLEW_FOUND})
    message("-- Found optional glew: " ${GLEW_INCLUDE_DIRS})
    include_directories(${GLEW_INCLUDE_DIRS})
endif (${GLEW_FOUND})

find_package(glfw3 REQUIRED)
if (${glfw3_FOUND})
    message("-- Found optional glfw: " ${glfw3_INCLUDE_DIR})
    include_directories(${glfw3_INCLUDE_DIR})
endif (${glfw3_FOUND})

find_package(glm REQUIRED)
if (${glm_FOUND})
    message("-- Found optional glm: " ${GLM_INCLUDE_DIRS})
    include_directories(${GLM_INCLUDE_DIRS})
endif (${glm_FOUND})

set(GL_LIBS ${OPENGL_LIBRARIES} ${GLUT_LIBRARIES} ${GLEW_LIBRARIES} glfw)


# Setup include directories for required libraries.
include_directories(include)
include_directories(.)
include_directories("src")

#----------------------------------------
# Build internal libraries
#----------------------------------------

add_subdirectory(src)

#message(STATUS "${PROJECT_SOURCE_DIR}")
#
#add_executable(1.HelloTriangle
#        ${PROJECT_SOURCE_DIR}/1.HelloTriangle/1.HelloTriangle.cpp
#        )
#target_link_libraries(1.HelloTriangle
#        ${GL_LIBS}
#        )
