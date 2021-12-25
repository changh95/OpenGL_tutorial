set(SOURCE_FILES
        main.cpp
        Mesh.cpp
        Shader.cpp
        Window.cpp
        Camera.cpp
        Texture.cpp
        )

set(HEADER_FILES
        Mesh.h
        Shader.h
        Window.h
        Camera.h
        stb_image.h
        Texture.h
        )

add_executable(7.TextureMapping
        ${SOURCE_FILES}
        ${HEADER_FILES}
        )
target_link_libraries(7.TextureMapping
        ${GL_LIBS}
        )