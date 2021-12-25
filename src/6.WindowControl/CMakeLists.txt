set(SOURCE_FILES
        Mesh.cpp
        Shader.cpp
        Window.cpp
        Camera.cpp
        SyntheticViewGen.cpp
        )

set(HEADER_FILES
        Mesh.h
        Shader.h
        Window.h
        Camera.h
        )

add_executable(6.WindowControl
        ${SOURCE_FILES}
        ${HEADER_FILES}
        )
target_link_libraries(6.WindowControl
        ${GL_LIBS}
        )